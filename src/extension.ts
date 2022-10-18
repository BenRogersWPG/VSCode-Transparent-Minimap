// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode:
import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';

// this method is called when the extension is activated:
export async function activate(context: vscode.ExtensionContext) {

	// Notify the user that the extension has been activated successfully:
	console.log('Thank you for installing Transparent Minimap, the extension is now active!');
	refreshSettings();

	// Register a command to update a setting (update transparency), which is used in the extension's walkthrough:
	context.subscriptions.push(vscode.commands.registerCommand('TransparentMinimap.updateTransparency', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		vscode.commands.executeCommand('workbench.action.openSettings', 'TransparentMinimap.transparencyLevel');
		vscode.window.showInformationMessage(`Adjust the minimap transparency. 00 is full transparent, 88 is half, FF is no transparency.`);
	}));

	// Register a command to update a setting (update transparency), which is used in the extension's walkthrough:
	context.subscriptions.push(vscode.commands.registerCommand('TransparentMinimap.updateColor', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		vscode.commands.executeCommand('workbench.action.openSettings', 'TransparentMinimap.minimapColor');
		vscode.window.showInformationMessage(`Adjust the minimap color. eg. 000000 no color, 00ff00 is full green`);
	}));

	// Register a command to refresh the minimap settings:
	context.subscriptions.push(vscode.commands.registerCommand('TransparentMinimap.refreshSettings', async () => {
		refreshSettings(true);
	}));

	async function refreshSettings(manual: boolean = false) {
		//Function to perform the minimap update without needing to restart VS Code

		//Get extension settings and minimap settings from configuration preferences
		const transparencyLevel: string = vscode.workspace.getConfiguration('TransparentMinimap').get('transparencyLevel')!;
		const minimapColor: string = vscode.workspace.getConfiguration('TransparentMinimap').get('minimapColor')!;
		let prevColorConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('workbench.colorCustomizations');
		const configSize = Object.keys(prevColorConfig).length;
		let minimapConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('editor.minimap.enabled');
		const enableMinimapTransparency: string = vscode.workspace.getConfiguration('TransparentMinimap').get('enableTransparentMinimap')!;

		//Warn user if minimap is disabled:
		if (minimapConfig.get('editor.minimap.enabled') === false && !manual) {
			const messageResponse = await vscode.window.showWarningMessage(`Minimap is disabled`, 'Enable Minimap');
			if (messageResponse === "Enable Minimap") {
				vscode.commands.executeCommand('workbench.action.openSettings', 'editor.minimap.enabled');
				vscode.window.showInformationMessage(`Check the checkbox to enable the minimap`);
			}
		}

		//If minimap transparency is asked to be disabled, disable it in the color configurations:
		if (!enableMinimapTransparency) {
			removeMinimapTransparency(manual, prevColorConfig);
			return;
		}

		if (configSize > 4) {
			//ColorCustomization setting already exists, so update "minimap.background" setting to existing extension settings

			//first, see if the minimap setting has been set yet:
			const existingMinimapBackground = prevColorConfig['minimap.background'];

			//console.log(existingMinimapBackground);

			if (existingMinimapBackground === undefined) {
				//Does not exist, so ADD "minimap.background" setting to the extension settings
				updateMinimapTransparency("#" + minimapColor + transparencyLevel, prevColorConfig);

			}

			else {
				if (existingMinimapBackground === '#' + minimapColor + transparencyLevel) {
					//Matches. No need to write setting to the extension settings
				}
				else {
					//Does not match, so UPDATE "minimap.background" setting to the extension settings

					if (configSize < 6) {
						//Only has minimap, so OVERWRITE "minimap.background" setting to the extension settings
						writeMinimapTransparency("#" + minimapColor + transparencyLevel);
					}

					else {
						//Contains other entries, so UPDATE "minimap.background" setting to the extension settings
						updateMinimapTransparency("#" + minimapColor + transparencyLevel, prevColorConfig);
					}
				}
			}
		}
		else {
			//Does not exist, so write ENTIRE  "workbench.colorCustomizations minimap.background" setting to the extension settings
			writeMinimapTransparency("#" + minimapColor + transparencyLevel);
		}

		//Display a message to the user that the settings have been successfully refreshed if manually performed:
		if (manual) {
			vscode.window.showInformationMessage(`Minimap appearance has been successfully refreshed`);
		}
	}
}

export async function writeMinimapTransparency(color: string) {

	let colorCustomizations = { "minimap.background": color };

	//Push the new settings to the Settings JSON:
	return await vscode.workspace
		.getConfiguration()
		.update(
			'workbench.colorCustomizations',
			colorCustomizations,
			ConfigurationTarget.Workspace,
		);
}

export async function updateMinimapTransparency(color: string, existingColorCustomizations: vscode.WorkspaceConfiguration) {

	interface WorkspaceConfigurationObject {
		[propName: string]: string;
	}
	var newColorConfiguration: WorkspaceConfigurationObject = {};

	Object.entries(existingColorCustomizations).forEach(([key, value], index) => {
		//console.log(key, value, index);
		if (key === "get" || key === "has" || key === "inspect" || key === "update") {

		}
		else {
			newColorConfiguration[key] = value;
		}

	});

	//Add the new minimap color to the list:
	newColorConfiguration['minimap.background'] = color;

	//Update the Settings JSON:
	return await vscode.workspace
		.getConfiguration()
		.update(
			'workbench.colorCustomizations',
			newColorConfiguration,
			ConfigurationTarget.Workspace,
		);
}

export async function removeMinimapTransparency(manual: boolean, existingColorCustomizations: vscode.WorkspaceConfiguration) {

	interface WorkspaceConfigurationObject {
		[propName: string]: string;
	}
	var newColorConfiguration: WorkspaceConfigurationObject = {};

	Object.entries(existingColorCustomizations).forEach(([key, value], index) => {
		//console.log(key, value, index);
		if (key === "get" || key === "has" || key === "inspect" || key === "update" || key === "minimap.background") {

		}
		else {
			newColorConfiguration[key] = value;
		}

	});

	//Display message to user that settings have been reverted
	if (manual) {
		const messageResponse = await vscode.window.showInformationMessage(`Minimap settings reverted to normal`, 'Enable Minimap Transparency');
		if (messageResponse === "Enable Minimap Transparency") {
			vscode.commands.executeCommand('workbench.action.openSettings', 'TransparentMinimap.enableTransparentMinimap');
			vscode.window.showInformationMessage(`Check the checkbox to enable the minimap transparency`);
		}
	}

	//Update the Settings JSON:
	return await vscode.workspace
		.getConfiguration()
		.update(
			'workbench.colorCustomizations',
			newColorConfiguration,
			ConfigurationTarget.Workspace,
		);


}

// Extension is deactivated
export function deactivate() {

}