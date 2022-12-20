const { program } = require("commander");
const check = require("../commands/check");

program
  .command("price")
  .description("")
  .option(
    "--coin <type>",
    "Enter your coin types in comma seperated format: --coint BTC,ETH,XRP",
    "BTC,ETH,XRP",
  )
  .option(
    "--currency <currency>",
    "Change Currency: --currency:EUR",
    "USD",
  )
  .action((cmd) => {
    check.price(cmd);
  });

program.parse(process.argv);
