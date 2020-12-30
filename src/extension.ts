import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "toodoo" is now active!');

  let disposable = vscode.commands.registerCommand("toodoo.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from TooDoo!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
