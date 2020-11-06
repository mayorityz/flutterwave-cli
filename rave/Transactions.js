const Base = require("./Wave.js");

class Transactions {
  constructor() {
    this.Base = new Base();
    this.flw = this.Base.init();
  }

  async transFunc(route, payload = "") {
    try {
      switch (route) {
        case "all":
          return await this.flw.Transaction.fetch();
          break;

        case "verify":
          console.log("verifying");
          return await this.flw.Transaction.verify(payload);
          break;

        case "refund":
          console.log("processing refund");
          return await this.flw.Transaction.refund(payload);
          break;

        default:
          console.log("invalid Transactions param");
          break;
      }
    } catch (error) {
      return error.message;
    } finally {
      this.Base.destructor();
    }
  }
}

module.exports = Transactions;
