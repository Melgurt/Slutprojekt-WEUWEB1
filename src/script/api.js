// API-calls

export async function fetchSelectableCurrencies() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSelectableCryptocurrencies() {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMarketData(currency, cryptocurrencies) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${cryptocurrencies.join()}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching price:", error);
    console.log(error);
  }
}
