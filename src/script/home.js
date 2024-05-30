import { fetchMarketData } from "./api.js";

let selectedCurrency;
let trackedCryptocurrencies;
let currentMarketData;
let lastUpdate;

const storage = localStorage;

(async () => {
  storage.clear();
  try {
    getStoredData();
    trackedCryptocurrencies.forEach((cryptocurrency) => {
      addCryptocurrencyField(cryptocurrency);
    });

    if (new Date().getTime() - lastUpdate > 30000) {
      await updateMarketData(selectedCurrency, trackedCryptocurrencies);
      console.log("Fetching new data");
    }
    setMarketData(currentMarketData, selectedCurrency);
  } catch (error) {
    console.error("Error executing functions:", error);
  }
})();

// FUNKTIONER SOM FRAMFÖRALLT KÖRS VID START

function getStoredData() {
  selectedCurrency = storage.getItem("currency") || "usd";
  trackedCryptocurrencies = JSON.parse(storage.getItem("cryptocurrencies")) || [
    "bitcoin",
    "ethereum",
  ];
  currentMarketData = JSON.parse(storage.getItem("marketData"));
  lastUpdate = JSON.parse(storage.getItem("lastUpdate")) || 0;
}

async function updateMarketData(currency, cryptocurrencies) {
  let marketData = await fetchMarketData(currency, cryptocurrencies);

  currentMarketData = marketData;
  storage.setItem("marketData", JSON.stringify(marketData));

  lastUpdate = new Date().getTime();
  storage.setItem("lastUpdate", JSON.stringify(lastUpdate));
}

function setMarketData(marketData, currency) {
  marketData.forEach((cryptocurrency) => {
    console.log(cryptocurrency.id);
    let cryptocurrencyField = document.getElementById(cryptocurrency.id);
    console.log(cryptocurrencyField);
    let dataSlots = cryptocurrencyField.querySelectorAll("td");

    dataSlots[0].innerText = cryptocurrency.name;
    dataSlots[1].innerText =
      cryptocurrency.current_price + " " + currency.toUpperCase();
    dataSlots[2].innerText =
      cryptocurrency.market_cap + " " + currency.toUpperCase();
    dataSlots[3].innerText = cryptocurrency.price_change_percentage_24h + "%";
  });
}

function addCryptocurrencyField(cryptocurrencyId) {
  const template = document.getElementById("cryptocurrencyField");

  console.log(cryptocurrencyId);

  let clone = template.content.cloneNode(true);
  clone.firstElementChild.id = cryptocurrencyId;

  document.getElementById("cryptocurrencyFields").appendChild(clone);
}
