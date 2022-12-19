const CryptoAPI = require("../lib/CryptoAPI");
const KeyManager = require("../lib/KeyManager");

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getApiKey();

      const api = new CryptoAPI(key);

      const priceData = await api.getPriceData(
        cmd.coin,
        cmd.currency,
      );

      console.log(priceData);
    } catch (err) {
      console.log(err.message.red);
    }
  },
};

module.exports = check;
