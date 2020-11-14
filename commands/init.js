exports.command = "init";

exports.describe = "--args [params]";

exports.builder = {
  credentials: {
    describe: "Save User Account Credentials",
    alias: "c",
  },
};
