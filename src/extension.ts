// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode:
import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';

// this method is called when the extension is activated:
export async function activate(context: vscode.ExtensionContext) {

	// Notify the user that the extension has been activated successfully:
	console.log('Thank you for installing Transparent Minimap, the extension is now active!');

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

	//Get extension settings from configuration preferences
	const transparencyLevel: string = vscode.workspace.getConfiguration('TransparentMinimap').get('transparencyLevel')!;
	const minimapColor: string = vscode.workspace.getConfiguration('TransparentMinimap').get('minimapColor')!;
	let prevColorConfig: vscode.WorkspaceConfiguration;
	prevColorConfig = vscode.workspace.getConfiguration('workbench.colorCustomizations');
	const configSize = Object.keys(prevColorConfig).length;

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

// Extension is deactivated
export function deactivate() {

}