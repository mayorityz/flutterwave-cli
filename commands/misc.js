exports.command = "misc";

exports.describe = "--args [params]";

exports.builder = {
  all: {
    describe: "Get Your Wallets",
    alias: "a",
  },
  bvn: {
    describe: "Verify BVN",
    alias: "b",
  },
};
