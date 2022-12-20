
# Crypto-CLI

A simple cli tool for getting latest cryptocurrency prices.



## Install Locally

Fitst you need [NodeJs](https://nodejs.org/en/) installed on your pc.\
Clone the project

```bash
  git clone https://github.com/MadDogTheGreat/crypto-cli
```

Go to the project directory

```bash
  cd crypto-cli
```

Install dependencies

```bash
  npm install
```

Install it globally

```bash
  npm link
```

## Useage

You need an API key from [Coinmarketcap.com](https://coinmarketcap.com/api/).\
Add your key to app
```bash
  coiner key set
```

You can remove or show your key
```bash
  coiner key show
  coiner key remove
```

Getting prices of specific currency(s)
```bash
  coiner check price --coin=BTC,ETH --currency=USD 
  # Coin: Bitcoin (BTC) | Price: 16818.280 USD
  # Coin: Ethereum (ETH) | Price: 1213.594 USD
```
