exports.command = "transactions";

exports.describe = "--args [params]";

exports.builder = {
  all: {
    describe: "fetch all",
    alias: "a",
  },
  verify: {
    describe: "verify",
    alias: "v",
  },
  refund: {
    describe: "refund a transaction",
    alia: "r",
  },
};
