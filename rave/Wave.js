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
   * @return response
   */
  this.init = function () {
    this.spinner = ora(" ... ").start();
    return new Flutterwave(publickey, secretkey);
  };

  this.processing = async (WAVEMETHOD, param, query) => {
    try {
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
        const VA = require("../rave/VirtualAccount");
        const FLW = new VA();
        const response = await FLW.vc(param, query);
        console.log(response);
      }

      if (WAVEMETHOD === "misc") {
        const MC = require("../rave/Misc");
        const FLW = new MC();
        const response = await FLW.Misc(param, query);
        console.log(response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  this.destructor = function () {
    return this.spinner.stop();
  };
}

module.exports = Base;
