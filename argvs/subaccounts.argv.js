const argv = require("../utilitties/test");
const { prompt } = require("enquirer");
const Rave = require("../rave");

if (argv._[0] === "subaccounts") {
  if (argv.hasOwnProperty("a")) {
    const request = async () => {
      const FLW = new Rave();
      const response = await FLW.subAccounts();
      console.log(response);
    };
    request();
  }

  if (argv.hasOwnProperty("u")) {
    const request = async () => {
      const FLW = new Rave();
      const response = await FLW.subAccountsUnique(argv.u);
      response.status === "success"
        ? console.log(response.data)
        : console.log(response.message);
    };
    request();
  }

  if (argv.hasOwnProperty("c")) {
    const request = async () => {
      const question = [
        {
          type: "input",
          name: "account_number",
          message: "Enter An Account Number",
          required: true,
        },
        {
          type: "input",
          name: "business_name",
          message: "Enter A Business Name.",
          required: true,
        },
        {
          type: "input",
          name: "business_email",
          message: "Enter Business Email.",
          required: true,
        },
        {
          type: "input",
          name: "business_contact",
          message: "Enter Business Person.",
          required: true,
        },
        {
          type: "input",
          name: "business_mobile",
          message: "Enter Business Mobile.",
          required: true,
        },
        {
          type: "select",
          name: "country",
          message: "Select Your Country.",
          required: true,
          choices: ["NG", "GH", "KE", "UG", "ZA", "TZ"],
        },
        {
          type: "select",
          name: "split_type",
          message: "Choose A Split Type.",
          required: true,
          choices: ["flat", "percentage"],
        },
        {
          type: "input",
          name: "split_value",
          message: "Enter Split Value",
          required: true,
        },
      ];

      const answer = await prompt(question);
      answer.business_contact_mobile = answer.business_contact;

      const banks = new Misc();
      const arrayOfBanks = await banks.bank(answer.country);

      const bank_ = await prompt({
        type: "select",
        name: "bank",
        message: "select bank",
        required: true,
        choices: arrayOfBanks.data,
      });

      const bankDetails = arrayOfBanks.data.filter(
        (bank) => bank.name === bank_.bank
      );

      answer.account_bank = bankDetails[0].code;
      console.log(answer);

      // create a subaccount now!
      const FLW = new Rave();
      const response = await FLW.createSubAccount(answer);
      console.log(response.message);
    };
    request();
  }

  if (argv.hasOwnProperty("d")) {
    const request = async () => {
      const FLW = new Rave();
      const response = await FLW.deleteSubAccount(argv.d);
      console.log(response.message);
    };
    request();
  }
}
