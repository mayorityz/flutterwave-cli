const argv = require("../utilitties/test");
const { prompt } = require("enquirer");

if (argv._[0] === "virtualcards") {
  const R = require("../rave/Wave");
  /**
   * all transactions by an entry and close dates
   */
  if (argv.hasOwnProperty("a")) {
    const request = async () => {
      const x = new R().processing("virtualcards", "all");
    };
    request();
  }

  if (argv.hasOwnProperty("f")) {
    const question = [
      {
        type: "input",
        name: "id",
        message: "V.Card id* :",
        required: true,
      },
    ];
    const request = async () => {
      const answer = await prompt(question);
      const x = new R().processing("virtualcards", "fetch", answer);
    };
    request();
  }

  //   block or unblock a card
  if (argv.hasOwnProperty("s")) {
    const question = [
      {
        type: "input",
        name: "id",
        message: "V.Card id* :",
        required: true,
      },
      {
        type: "select",
        name: "status_action",
        message: "Select Account :",
        choices: ["block", "unblock"],
        required: true,
      },
    ];
    const request = async () => {
      const answer = await prompt(question);
      const x = new R().processing("virtualcards", "card_action", answer);
    };
    request();
  }

  //   terminate a card
  if (argv.hasOwnProperty("t")) {
    const question = [
      {
        type: "input",
        name: "id",
        message: "V.Card id* :",
        required: true,
      },
    ];
    const request = async () => {
      const answer = await prompt(question);
      const x = new R().processing("virtualcards", "terminate", answer);
    };
    request();
  }
}
