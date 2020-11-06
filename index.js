#!/usr/bin/env node
const Wave = require("./rave");
const argv = require("./utilitties/controller");

const getSubAccount = async () => {
  try {
    const x = new Wave();
    console.log(await x.subAccounts());
  } catch (error) {
    console.log(error);
  }
};
argv.s && getSubAccount();
