const argv = require("../utilitties/test");
const { prompt } = require("enquirer");
const R = require("../rave/Wave");

// generate unique id for tx_ref

if (argv._[0] === "virtualaccounts") {
  if (argv.hasOwnProperty("c")) {
    const question = [
      {
        type: "input",
        name: "email",
        message: "Enter Email Address:",
        required: true,
      },
    ];
    const request = async () => {
      const answer = await prompt(question);
      answer.is_permanent = true;
      answer.tx_ref = "mayowa_is_random";
      const x = new R().processing("virtualaccounts", "create", answer);
    };
    request();
  }

  if (argv.hasOwnProperty("f")) {
    const question = [
      {
        type: "input",
        name: "order_ref",
        message: "Enter Card's Order Ref:",
        required: true,
      },
    ];
    const request = async () => {
      const answer = await prompt(question);
      const x = new R().processing("virtualaccounts", "fetch", answer);
    };
    request();
  }
}
