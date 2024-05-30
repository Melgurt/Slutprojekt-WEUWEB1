import {
  fetchSelectableCryptocurrencies,
  fetchSelectableCurrencies,
} from "./api.js";

const storage = localStorage;

document
  .getElementById("changeCurrencyButton")
  .addEventListener("click", setCurrency);

let confirmedCurrency = document.getElementById("confirmed-currency-change");
let confirmedCrypto = document.getElementById("confirmed-crypto-change");

console.log(confirmedCurrency);

async function setCurrency() {
  let searchedCurrency = document
    .getElementById("changeCurrency")
    .value.toLowerCase();

  document.getElementById("changeCurrency").value = "";

  try {
    const currencies = await fetchSelectableCurrencies();

    if (currencies.includes(searchedCurrency)) {
      storage.setItem("currency", searchedCurrency);
      storage.setItem("lastUpdate", "0");
      confirmedCurrency.textContent = `Changed currency to ${searchedCurrency.toUpperCase()}`;
    } else {
      confirmedCurrency.textContent = `${searchedCurrency.toUpperCase()} is not a valid currency`;
    }
  } catch (error) {
    (confirmedCurrency.textContent = `Error retrieving data:`), error;
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

  let trackedCryptocurrencies =
    storage.getItem("cryptocurrencies") !== null
      ? JSON.parse(storage.getItem("cryptocurrencies"))
      : ["bitcoin", "ethereum"];

  if (trackedCryptocurrencies.includes(searchedCryptocurrency)) {
    alert("Cryptocurrency already added");
  } else {
    try {
      const selectableCryptocurrencies =
        await fetchSelectableCryptocurrencies();
      if (
        selectableCryptocurrencies.some(
          (cryptocurrency) => cryptocurrency["id"] === searchedCryptocurrency
        )
      ) {
        trackedCryptocurrencies.push(searchedCryptocurrency);
        storage.setItem(
          "cryptocurrencies",
          JSON.stringify(trackedCryptocurrencies)
        );
        console.log(storage.getItem("cryptocurrencies"));
        storage.setItem("lastUpdate", "0");
        confirmedCrypto.textContent = `${searchedCryptocurrency.toUpperCase()} was added to the tracked cryptos`;
      } else {
        confirmedCrypto.textContent = `${searchedCryptocurrency.toUpperCase()} was not found`;
      }
    } catch (error) {
      (confirmedCrypto.textContent = "Error retrieving data:"), error;
    }
  }
}

document
  .getElementById("removeButton")
  .addEventListener("click", removeCryptocurrency);

function removeCryptocurrency() {
  let searchedCryptocurrency = document
    .getElementById("addCryptocurrency")
    .value.toLowerCase();

  document.getElementById("addCryptocurrency").value = "";

  let trackedCryptocurrencies = JSON.parse(
    storage.getItem("cryptocurrencies")
  ) || ["bitcoin", "ethereum"];

  if (trackedCryptocurrencies.includes(searchedCryptocurrency)) {
    trackedCryptocurrencies.splice(
      trackedCryptocurrencies.indexOf(searchedCryptocurrency),
      1
    );

    storage.setItem(
      "cryptocurrencies",
      JSON.stringify(trackedCryptocurrencies)
    );
    storage.setItem("lastUpdate", "0");
    confirmedCrypto.textContent = `${searchedCryptocurrency.toUpperCase()} was removed from tracked cryptos`;
  } else {
    confirmedCrypto.textContent = "Could not find cryptocurrency";
  }
}
