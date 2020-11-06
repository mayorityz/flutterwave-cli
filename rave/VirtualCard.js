const Base = require("./Wave.js");

class VirtualCards {
  constructor() {
    this.Base = new Base();
    this.flw = this.Base.init();
  }

  async vc(route, payload = "") {
    try {
      switch (route) {
        case "all":
          console.log("fetching v. cards");
          return await this.flw.VirtualCard.fetch_all();
          break;

        case "fetch":
          console.log("fetching card details");
          return await this.flw.VirtualCard.fetch(payload);
          break;

        case "terminate":
          console.log("terminating this card");
          return await this.flw.VirtualCard.terminate(payload);
          break;

        case "card_action":
          console.log(`${payload.status_action}ing V.Card`);
          return await this.flw.VirtualCard.block(payload);
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

module.exports = VirtualCards;
