const argv = require("../utilitties/test");
const { prompt } = require("enquirer");

if (argv._[0] === "misc") {
  const Rave = require("../rave/Wave");
  if (argv.hasOwnProperty("a")) {
    const request = async () => {
      const FLW = new Rave();
      const response = await FLW.processing("misc", "wallets");
      console.log(response);
    };
    request();
  }

  if (argv.hasOwnProperty("b")) {
    const question = [
      {
        type: "input",
        name: "bvn",
        message: "Enter bvn",
        required: true,
      },
    ];
    const request = async () => {
      const answer = await prompt(question);

      const FLW = new Rave();
      const response = await FLW.processing("misc", "bvn", answer);
      console.log(response);
    };
    request();
  }
}
