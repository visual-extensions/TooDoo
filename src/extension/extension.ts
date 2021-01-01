import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("TooDoo started!");
  context.subscriptions.push(
    vscode.commands.registerCommand("toodoo.helloWorld", async () => {
      const answer = await vscode.window.showInformationMessage(
        "How was your day?",
        "good",
        "bad"
      );

      if (answer === "bad") {
        vscode.window.showInformationMessage("Sorry to hear that!");
      } else {
        console.log(answer);
      }
    })
  );
  const webview = vscode.window.createWebviewPanel(
    "tooDoo",
    "TooDoo",
    vscode.ViewColumn.One
  );
}

export function deactivate() {}
