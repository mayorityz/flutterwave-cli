const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./db.json");
const DB = low(adapter);

class Database {
  static create() {
    //   creates and sets defaults
    return DB.defaults({ credentials: {} }).write();
  }

  update(pkey, skey, secret, password) {
    //   save new user credentials.
    DB.set("credentials", { pkey, skey, encryption: secret, password }).write();
  }

  static check() {
    //   checks that the db is initialized
    const status = DB.has("credentials").value();
    if (!status) this.create();
    return true;
  }

  static read() {
    const data = DB.get("credentials").value();
    return data;
  }
}

module.exports = Database;
