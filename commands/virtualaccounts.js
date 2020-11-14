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
    describe: "-- coming soon block/unblock a V.Account",
    alias: "s",
  },
  terminate: {
    describe: "-- coming soon terminate an account",
    alias: "t",
  },
};
