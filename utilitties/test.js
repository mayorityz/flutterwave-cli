#!/usr/bin/env node
const { argv } = require("yargs")
  .scriptName("flw")
  .usage("Usage: $0 command -arg [param...]")
  .example([
    ["$0 subaccounts -a ", "Returns all existing subaccounts."],
    ["$0 subaccounts -u 2383", "Returns a unique subaccount"],
  ])
  .command(require("../commands/subaccounts"))
  .command(require("../commands/transactions"))
  .command(require("../commands/virtualcards"))
  .command(require("../commands/virtualaccounts"))
  .command(require("../commands/misc"))
  .command(require("../commands/init"))
  .describe("help", "Show help.")
  .describe("version", "Show version number.")
  .epilog("$0 dev by mayorityz -2020");

module.exports = argv;

require("../argvs/subaccounts.argv");
require("../argvs/transactions.argv");
require("../argvs/virtualcard.argv");
require("../argvs/virtualacct.argv");
require("../argvs/misc.argv");
require("../argvs/initialization.argv");
