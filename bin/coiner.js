#!/usr/bin/env node

const { program } = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API Key")
  .command("check", "Ckeck Coin Price Info")
  .parse(process.argv);
