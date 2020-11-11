const Base = require("./Wave.js");

/**
 * Wave's Misc Api
 */
class Misc {
  constructor() {
    this.Base = new Base();
    this.flw = this.Base.init();
  }

  async bank(country) {
    try {
      const banks = this.flw.Bank.country({ country });
      return banks;
    } catch (error) {
      return error.message;
    } finally {
      this.Base.destructor();
    }
  }

  async Misc(route, payload) {
    try {
      switch (route) {
        case "bank":
          // run the bank code here ...
          break;
        case "wallets":
          // get all wallets
          return await this.flw.Misc.bal();
          break;
        case "bvn":
          // get details on a bvn ...
          return await this.flw.Misc.bvn(payload);
        default:
          break;
      }
    } catch (error) {
      return error.message;
    } finally {
      this.Base.destructor();
    }
  }
}

module.exports = Misc;
