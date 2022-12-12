# NPM -

npm is the standard package manager for Node.js.

It is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

Yarn and pnpm are alternatives to npm cli

Some npm commands -
npm install
npm update
npm uninstall/remove
npm install -g <package_name> // to install package globally

---

# Npm Update Packages -

npm outdated -
This command will check every installed dependency and compare the current version with the latest version in the npm registry. It is printed out into a table outlining available versions.

npm-check-updates -
For an advanced and customizable upgrading experience, I'd recommend npm-check-updates. This package can do everything npm outdated and npm upgrade can do with some added customization options. It does require a package installation, however.

npm install -g npm-check-updates
ncu
ncu --upgrade / -u
ncu --interactive / -i
ncu --interactive --format group

---
