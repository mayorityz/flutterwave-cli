const argv = require("../utilitties/test");
const { prompt } = require("enquirer");
const Rave = require("../rave/Transactions");
const R = require("../rave/Wave");

if (argv._[0] === "transactions") {
  /**
   * all transactions by an entry and close dates
   */
  if (argv.hasOwnProperty("a")) {
    const request = async () => {
      const question = [
        {
          type: "input",
          name: "from",
          message: "Date from: [yyyy-mm-dd]",
          required: true,
        },
        {
          type: "input",
          name: "to",
          message: "Date to: [yyyy-mm-dd]",
          required: true,
        },
      ];
      const answer = await prompt(question);

      const x = new R().processing("transactions", "all", answer);

      // const FLW = new Rave();
      // const response = await FLW.transFunc("all", answer);
      // console.log(response.data);
    };
    request();
  }

  /**
   * verify transaction by id.
   */

  if (argv.hasOwnProperty("v")) {
    const question = [
      {
        type: "input",
        name: "id",
        message: "trans id* :",
        required: true,
      },
    ];

    const request = async () => {
      const answer = await prompt(question);
      const x = new R().processing("transactions", "verify", answer);
      // const FLW = new Rave();
      // const response = await FLW.transFunc("verify", answer);
      // console.log(response.data);
    };
    request();
  }

  /**
   * refund transaction by id.
   */

  if (argv.hasOwnProperty("r")) {
    const question = [
      {
        type: "input",
        name: "id",
        message: "trans id* :",
        required: true,
      },
      {
        type: "input",
        name: "amount",
        message: "Amount To Refund* :",
        required: true,
      },
    ];

    const request = async () => {
      const answer = await prompt(question);
      const FLW = new Rave();
      const response = await FLW.transFunc("refund", answer);
      console.log(response.data);
    };
    request();
  }
}
