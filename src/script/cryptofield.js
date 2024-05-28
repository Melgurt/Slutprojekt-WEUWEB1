//Endast kod för ui interaction här

// Ska fixa sökruta för valutor, callar endast APIn när sökning görs för att spara requests. Vald valutan sparas mellan sessions. Samma sak för crypto när man lägger till ny.

let selectedCurrency;
let trackedCryptocurrencies;
let currentMarketData;
let lastUpdate;

const storage = localStorage;

(async () => {
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
    let dataSlots = cryptocurrencyField.querySelectorAll("th");

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

// Search fields

document
  .getElementById("changeCurrencyButton")
  .addEventListener("click", setCurrency);

async function setCurrency() {
  let searchedCurrency = document
    .getElementById("changeCurrency")
    .value.toLowerCase();

  document.getElementById("changeCurrency").value = "";

  try {
    const currencies = await fetchSelectableCurrencies();

    currencies.forEach(async (currency) => {
      if (currency == searchedCurrency) {
        selectedCurrency = searchedCurrency;
        storage.setItem({ currency: selectedCurrency });

        await updateMarketData(selectedCurrency, trackedCryptocurrencies);
        await setMarketData(currentMarketData, selectedCurrency);
      }
    });
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

document
  .getElementById("addButton")
  .addEventListener("click", addCryptocurrency);

async function addCryptocurrency() {
  let searchedCryptocurrency = document
    .getElementById("addCryptocurrency")
    .value.toLowerCase();

  document.getElementById("addCryptocurrency").value = "";

  try {
    const cryptocurrencies = await fetchSelectableCryptocurrencies();

    cryptocurrencies.forEach(async (cryptocurrency) => {
      if (cryptocurrency["id"] == searchedCryptocurrency) {
        trackedCryptocurrencies.push(searchedCryptocurrency);

        storage.setItem({ cryptocurrencies: trackedCryptocurrencies });
        addCryptocurrencyField(searchedCryptocurrency);

        await updateMarketData(selectedCurrency, trackedCryptocurrencies);
        await setMarketData(currentMarketData, selectedCurrency);
      }
    });
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

document
  .getElementById("removeButton")
  .addEventListener("click", removeCryptocurrency);

async function removeCryptocurrency() {
  let searchedCryptocurrency = document
    .getElementById("addCryptocurrency")
    .value.toLowerCase();

  document.getElementById("addCryptocurrency").value = "";

  trackedCryptocurrencies.forEach(async (cryptocurrencyId, index) => {
    if (cryptocurrencyId == searchedCryptocurrency) {
      trackedCryptocurrencies.splice(index, 1);

      storage.setItem({ cryptocurrencies: trackedCryptocurrencies });

      document.getElementById(cryptocurrencyId).remove();

      await updateMarketData(selectedCurrency, trackedCryptocurrencies);
      await setMarketData(currentMarketData, selectedCurrency);
    }
  });
}
// API-calls

async function fetchSelectableCurrencies() {
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

async function fetchSelectableCryptocurrencies() {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchMarketData(currency, cryptocurrencies) {
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
