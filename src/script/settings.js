import {
  fetchSelectableCryptocurrencies,
  fetchSelectableCurrencies,
} from "./api.js";

const storage = localStorage;

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
        storage.setItem("currency", currency);
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
    const selectableCryptocurrencies = await fetchSelectableCryptocurrencies();

    let trackedCryptocurrencies = storage.getItem("cryptocurrencies") || [
      "bitcoin",
      "ethereum",
    ];

    console.log(trackedCryptocurrencies);

    selectableCryptocurrencies.forEach(async (cryptocurrency) => {
      if (cryptocurrency["id"] == searchedCryptocurrency) {
        trackedCryptocurrencies.push(cryptocurrency);
        storage.setItem("cryptocurrencies", JSON.stringify());
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

  let trackedCryptocurrencies = JSON.parse(
    storage.getItem("cryptocurrencies")
  ) || ["bitcoin", "ethereum"];

  trackedCryptocurrencies.forEach(async (cryptocurrencyId, index) => {
    if (cryptocurrencyId == searchedCryptocurrency) {
      trackedCryptocurrencies.splice(index, 1);

      storage.setItem(
        "cryptocurrencies",
        JSON.stringify(trackedCryptocurrencies)
      );
    }
  });
}
