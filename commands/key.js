const inquirer = require("inquirer");
const colors = require("colors");

const KeyManager = require("../services/KeyManager");
const {
  isRequired,
} = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter Api Key".blue,
        validate: isRequired,
      },
    ]);

    const key = keyManager.setApiKey(input.key);
    if (key) {
      console.log("API Key set!".green);
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getApiKey();

      console.log(
        "Current API Key: ",
        key.yellow,
      );
    } catch (error) {
      console.log(error.message.red);
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.removeApiKey();

      console.log("Key Removed!".blue);
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

module.exports = key;
