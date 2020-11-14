const argv = require("../utilitties/test");
const DB = require("../store/db");
const { prompt } = require("enquirer");

if (argv._[0] === "init") {
  if (argv.hasOwnProperty("c")) {
    //   creates a local database for the user.
    const request = async () => {
      const question = [
        {
          type: "input",
          name: "pkey",
          message: "Enter Your Flutterwave Private Key",
          required: true,
        },
        {
          type: "input",
          name: "skey",
          message: "Enter Your Flutterwave Public Key",
          required: true,
        },
        {
          type: "input",
          name: "encryption",
          message: "Enter Your Flutterwave Encryption Key",
          required: true,
        },
        {
          type: "input",
          name: "password",
          message: "Set A Default Passsword",
          required: true,
        },
      ];

      const answer = await prompt(question);
      const createDB = new DB();

      if (DB.check()) {
        createDB.update(
          answer.pkey,
          answer.skey,
          answer.encryption,
          answer.password
        );
        console.log("Congratulations!");
        console.log("You have initialized your cli tool!!");
      }
    };

    request();
  }
}
