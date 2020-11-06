const Flutterwave = require("flutterwave-node-v3");
const db = require("../store/db");
const ora = require("ora");

const publickey = db.get("credentials.pkey").value();
const secretkey = db.get("credentials.skey").value();

/**
 * Flutterwave base!
 */
function Base() {
  /**
   * Wave initialization
   * @param {string} pKey - public key
   * @param sKey - public key
   * @return reponse
   */
  this.init = function () {
    this.spinner = ora(" ... ").start();
    return new Flutterwave(publickey, secretkey);
  };

  this.processing = async (WAVEMETHOD, param, query) => {
    if (WAVEMETHOD === "transactions") {
      const Transaction = require("../rave/Transactions");
      const FLW = new Transaction();
      const response = await FLW.transFunc(param, query);
      console.log(response);
    }

    if (WAVEMETHOD === "virtualcards") {
      const VC = require("../rave/VirtualCard");
      const FLW = new VC();
      const response = await FLW.vc(param, query);
      console.log(response);
    }

    if (WAVEMETHOD === "virtualaccounts") {
      const VC = require("../rave/VirtualAccount");
      const FLW = new VC();
      const response = await FLW.vc(param, query);
      console.log(response);
    }
  };

  this.destructor = function () {
    return this.spinner.stop();
  };
}

module.exports = Base;
