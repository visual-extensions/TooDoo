import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "toodoo" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("toodoo.helloWorld", () => {
      vscode.window.showInformationMessage("How was your day?", "good", "bad");
    })
  );
}

export function deactivate() {}
