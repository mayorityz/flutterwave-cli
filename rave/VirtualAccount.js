const Base = require("./Wave.js");

class VirtualAccounts {
  constructor() {
    this.Base = new Base();
    this.flw = this.Base.init();
  }

  async vc(route, payload = "") {
    try {
      switch (route) {
        case "create":
          console.log("creating v. account");
          console.log("Note the 'order_ref' that is returned!");
          return await this.flw.VirtualAcct.create(payload);
          break;

        case "fetch":
          console.log("fetching account information");
          return await this.flw.VirtualAcct.fetch(payload);
          break;

        default:
          console.log("invalid Virtual Account  parameter");
          break;
      }
    } catch (error) {
      return error.message;
    } finally {
      this.Base.destructor();
    }
  }
}

module.exports = VirtualAccounts;
