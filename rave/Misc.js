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
}

module.exports = Misc;
