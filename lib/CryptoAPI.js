const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
  }

  async getPriceData(coinOption, currencyOption) {
    let response = null;
    try {
      response = await axios.get(
        `${this.baseUrl}?symbol=${coinOption.replace(
          " ",
          ",",
        )}&convert=${currencyOption}`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": this.apiKey,
          },
        },
      );
    } catch (err) {
      response = null;
      console.log(err);
    }

    if (response) {
      const resObject = response.data.data;
      let output = [];
      for (const key in resObject) {
        if (Object.hasOwnProperty.call(resObject, key)) {
          const coin = resObject[key];
          output.push(
            `Coin: ${coin.name.yellow} (${
              coin.symbol.yellow
            }) | Price: ${
              Object.values(coin.quote)[0].price.toFixed(3).green
            } ${currencyOption.italic.bold}`,
          );
        }
      }

      return output;
    }
  }
}

module.exports = CryptoAPI;
