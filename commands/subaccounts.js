exports.command = "subaccounts";

exports.describe = "--args [params]";

exports.builder = {
  all: {
    describe: "fetch subaccounts",
    alias: "a",
  },
  unique: {
    describe: "--subaccount [subaccount ID]",
    alias: "u",
    nargs: 1,
    type: "string",
  },
  create: {
    describe: "create new subaccount",
    alias: "c",
  },
  update: {},
  delete: {
    describe: "Delete A Subaccount by it's ID",
    alias: "d",
    type: "number",
    nargs: 1,
  },
};
