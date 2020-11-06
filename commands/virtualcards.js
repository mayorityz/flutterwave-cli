exports.command = "virtualcards";

exports.describe = "--args [params]";

exports.builder = {
  all: {
    describe: "fetch all",
    alias: "a",
  },
  fetch: {
    describe: "fetch unique card",
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
