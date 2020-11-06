exports.command = "virtualaccounts";

exports.describe = "--args [params]";

exports.builder = {
  create: {
    describe: "Create A V.Account",
    alias: "c",
  },
  fetch: {
    describe: "fetch V. Account Details",
    alias: "f",
  },
  status: {
    describe: "block/unblock a V.Card",
    alias: "s",
  },
  terminate: {
    describe: "terminate a card",
    alias: "t",
  },
};
