const axios = require("axios");
const colors = require("colors");
const { ModuleDetectionKind } = require("typescript");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
  }

  async getPriceData(coinOption, currencyOption) {
    let response = null;
    try {
      response = await axios.get(`${this.baseUrl}?symbol=${coinOption}&convert=${currencyOption}`, {
        headers: {
          "X-CMC_PRO_API_KEY": this.apiKey,
        },
      });
    } catch (err) {
      response = null;
      console.log(err);
    }

    if (response) {
      let output = "";

      const resObject = response.data.data;
      for (const key in resObject) {
        if (Object.hasOwnProperty.call(resObject, key)) {
          const coin = resObject[key];
          console.log(coin);
          // output += `Coin: ${coin.name.yellow} - ${coin.symbol} | Price: ${
          //   Object.values(coin.quote)[0].price
          // } ${currencyOption}`;
        }

        return output;
      }
    }
  }
}

module.exports = CryptoAPI;
