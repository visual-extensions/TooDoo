# Contributing Guidelines

Here are some contributing guidelines, if you would like to contribute to **TooDoo**.

PRs are **greatly** appreciated, and please don't hesitate to change anything you find! Spelling mistakes, code flaws, performance issues, as long as it's **valid**, and follows our guidelines, it'll most likely be accepted. Happy hacking!

### Tools Used

- [Husky](https://github.com/typicode/husky) is used to limit pull request names.
- [Prettier](https://prettier.io/) is used as our Linter.
- [Pull](https://github.com/wei/pull), to keep your fork up to date.
- [Yarn][https://yarnpkg.com/] is the preferred package manager. When contributing, you should use Yarn over npm.

## Local Deployment Instructions

Here are **instructions** on how to set up the repository locally. The main extension code will be found in **src/extension**.

1. First, you need to **fork** the repository. Once you've forked it, CD into your local instance of the repo. Now, create a new branch for your changes, by running the command `git checkout -b branchname`.

> Keep branch, and commit names similar to the ones in the repository.

2. Next, you need to install all the dependencies locally, by running the command `yarn add`, in your terminal.

3. Finally, you can start the extension. In your terminal, run the command `yarn run watch`, to watch the application. Then, you can press **Function** + **F5**, to run the extension. Keep the watch command running.

4. Once you're done adding your changes, make sure to run `yarn run lint`, to lint the project, to ensure that your codestyle is similar to the codestyle in the repository.

> Every time you make a change to the extension, the Extension Development Host window must be refreshed, to see your changes.

## Pull Request Guidelines

Here are some requirements, as to how your PR should look.

- Keep different features in different PRs.
- Similar features can be in 1 PR.
- Don't change files for no reason, such as adding a space in another file, etc.
- We also expect you to be active in the PRs, if we add a review, or request changes, we expect you to be able to get it done.

### Happy Hacking!
