const { argv } = require("yargs")
  .scriptName("wave")
  .usage("Usage: $0 [-arg] [param]")
  .example("$0 -s", "Returns a list of subaccounts.")
  .option("w", {
    alias: "width",
    describe: "The width of the area.",
    // demandOption: "The width is required.",
    type: "number",
    nargs: 1,
  })
  .option("h", {
    alias: "height",
    describe: "The height of the area.",
    // demandOption: "The height is required.",
    type: "number",
    nargs: 1,
  })
  .option("s", {
    alias: "subaccount",
    describe: "Get All Subaccounts on account",
  })
  .describe("help", "Show help.")
  .describe("version", "Show version number.")
  .epilog("2020")
  .epilog("by mayorityz");

module.exports = argv;
