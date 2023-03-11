import * as assert from 'assert';
import * as sinon from 'sinon';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as transparentMinimap from "../../extension";

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	let sandbox: sinon.SinonSandbox;
	let showInformationMessageStub: sinon.SinonStub;

	setup(() => {
		sandbox = sinon.createSandbox();
		showInformationMessageStub = sandbox.stub(vscode.window, 'showInformationMessage');
	});

	teardown(() => {
		sandbox.restore();
	});

	test('Sample Test', () => {
		assert.strictEqual([1, 2, 3].indexOf(5), -1);
		assert.strictEqual([1, 2, 3].indexOf(0), -1);
		assert.equal("world", "world");
	});

	test('Message Test', async () => {
		//Will test the refresh message
		transparentMinimap.refreshSettings(true);
		const message = `Minimap appearance has been successfully refreshed.`;
		sinon.assert.calledOnce(showInformationMessageStub);
		sinon.assert.calledWithExactly(showInformationMessageStub, message);
	});

	test('Message Test - non-manual', async () => {
		//Ensures that the extension does not display an information message when the extension is run by default
		transparentMinimap.refreshSettings();
		sinon.assert.notCalled(showInformationMessageStub);
	});

	test('Minimap Extension Enabled', () => {
		//Run the extension:
		vscode.commands.executeCommand('TransparentMinimap.refreshSettings');

		//Verify the extension sets enableTransparentMinimap in the settings:
		const enableMinimapTransparency: string = vscode.workspace.getConfiguration('TransparentMinimap').get('enableTransparentMinimap')!;
		console.log(`\tenableMinimapTransparency: ${enableMinimapTransparency}`);
		assert.strictEqual(enableMinimapTransparency, true);
	});

	test('Minimap Enabled', () => {
		//Verify the editor.minimap.enabled is not false:
		let minimapConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('editor.minimap.enabled').get('editor.minimap.enabled')!;
		console.log(`\tminimapConfig: ${minimapConfig}`);
		assert.notStrictEqual(minimapConfig, false);
	});

	test('Minimap Color', () => {
		//Verify the extension sets minimapColor in the settings:
		const minimapColor: string = vscode.workspace.getConfiguration('TransparentMinimap').get('minimapColor')!;
		console.log(`\tminimapColor: ${minimapColor}`);
		assert.strictEqual(minimapColor, "000000");
	});

	test('Transparency Level', () => {
		//Verify the extension sets transparencyLevel in the settings:
		const transparencyLevel: string = vscode.workspace.getConfiguration('TransparentMinimap').get('transparencyLevel')!;
		console.log(`\ttransparencyLevel: ${transparencyLevel}`);
		assert.strictEqual(transparencyLevel, "00");
	});

	test('Previous Configs - Less Than', () => {
		//Verify the extension sets workbench.colorCustomizations in the settings:
		let prevColorConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('workbench.colorCustomizations');
		const configSize = Object.keys(prevColorConfig).length;
		console.log(`\tconfigSize: ${configSize}`);
		assert.ok(configSize < 11);
	});

	test('Previous Configs - Equal', () => {
		//Verify the extension sets workbench.colorCustomizations in the settings:
		let prevColorConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('workbench.colorCustomizations');
		const configSize = Object.keys(prevColorConfig).length;
		console.log(`\tconfigSize: ${configSize}`);
		assert.equal(configSize, 10);
	});

	test('Remove Minimap Transparency', () => {
		//Verify the extension sets workbench.colorCustomizations in the settings, by simulating a turn-off, then turn-on of the main transparency:
		vscode.workspace.getConfiguration('TransparentMinimap').update('enableTransparentMinimap', false, false);
		vscode.commands.executeCommand('TransparentMinimap.refreshSettings');
		new Promise(resolve => setTimeout(resolve, 2000));
		let prevColorConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('workbench.colorCustomizations');
		const configSize = Object.keys(prevColorConfig).length;
		console.log(`\t${configSize}`);
		assert.equal(configSize, 10);
		new Promise(resolve => setTimeout(resolve, 2000));
		vscode.workspace.getConfiguration('TransparentMinimap').update('enableTransparentMinimap', true, true);

	});
});
