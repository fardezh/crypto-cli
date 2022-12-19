const { program } = require("commander");
const check = require("../commands/check");

program
  .command("price")
  .description("")
  .option(
    "--coin <type>",
    "Add specific coin types in CSV format",
    "BTC,ETH,XRP",
  )
  .option("--currency <currency>", "Change Currency", "USD")
  .action((cmd) => {
    check.price(cmd);
  });

program.parse(process.argv);
