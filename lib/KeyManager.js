const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setApiKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getApiKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No Api Key Found!");
    }

    return key;
  }

  removeApiKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No Api Key Found!");
    }

    this.conf.delete("apiKey");
    return;
  }
}

module.exports = KeyManager;
