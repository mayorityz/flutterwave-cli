const Base = require("./Wave.js");

class Wave {
  constructor() {
    this.Base = new Base();
    this.flw = this.Base.init();
  }

  // get subaccounts
  async subAccounts() {
    try {
      const response = await this.flw.Subaccount.fetch_all();
      return response;
    } catch (error) {
      return error.message;
    } finally {
      this.Base.destructor();
    }
  }

  async subAccountsUnique(id) {
    try {
      const response = await this.flw.Subaccount.fetch({
        id,
      });
      return response;
    } catch (error) {
      return error.message;
    } finally {
      this.Base.destructor();
    }
  }

  async createSubAccount(payload) {
    try {
      const response = await this.flw.Subaccount.create(payload);
      return response;
    } catch (error) {
      return error.msg;
    } finally {
      this.Base.destructor();
    }
  }

  async deleteSubAccount(id) {
    try {
      const response = await this.flw.Subaccount.delete({ id });
      return response;
    } catch (error) {
      return errorMessage;
    } finally {
      this.Base.destructor();
    }
  }
}

module.exports = Wave;
