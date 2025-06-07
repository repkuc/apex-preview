document.addEventListener("DOMContentLoaded", () => {
  const propertySelect = document.getElementById("property-type");
  const purposeSelect = document.getElementById("purpose");
  const priceOutput = document.getElementById("price");
  const timeOutput = document.getElementById("time");
  const documentList = document.getElementById("document-list");
  const submitButton = document.getElementById("submit-request");

  const data = {
    apartment: {
      prices: { credit: 150, sale: 130, rent: 100 },
      time: {
        credit: "2 darba dienas",
        sale: "3 darba dienas",
        rent: "2 darba dienas",
      },
      documents: ["Zemesgrāmata", "Kadastrālā uzmērīšana"],
    },
    house: {
      prices: { credit: 180, sale: 170, rent: 110 },
      time: {
        credit: "4 darba dienas",
        sale: "3 darba dienas",
        rent: "3 darba dienas",
      },
      documents: [
        "Zemesgrāmata",
        "Kadastrālās uzmērīšana",
        "Zemes robežu plāns",
        "Energoefektivitātes sertifikāts",
      ],
    },
    land: {
      prices: { credit: 200, sale: 180, rent: 160 },
      time: {
        credit: "3 darba dienas",
        sale: "3 darba dienas",
        rent: "5 darba dienas",
      },
      documents: [
        "Zemesgrāmata",
        "Kadastrālās uzmērīšana",
        "Zemes robežu plāns",
        "Energoefektivitātes sertifikāts",
      ],
    },
    commercial: {
      prices: { credit: 250, sale: 200, rent: 190 },
      time: {
        credit: "3 darba dienas",
        sale: "3 darba dienas",
        rent: "5 darba dienas",
      },
      documents: [
        "Zemesgrāmata",
        "Kadastrālās uzmērīšana",
        "Zemes robežu plāns",
        "Energoefektivitātes sertifikāts",
        "Īres līgums",
        "Koplietošanas līgumi",
      ],
    },
  };

  function updateCalculator() {
    const property = propertySelect.value;
    const purpose = purposeSelect.value;

    if (property || purpose) {
      priceOutput.textContent = data[property]?.prices[purpose] || "-";
      timeOutput.textContent = data[property]?.time[purpose] || "-";
      documentList.innerHTML =
        data[property]?.documents.map((doc) => `<li>${doc}</li>`).join("") ||
        "<li>Lūdzu, izvēlieties īpašumu...</li>";
    } else {
      priceOutput.textContent = "-";
      timeOutput.textContent = "-";
      documentList.innerHTML = "<li>Lūdzu, izvēlieties īpašumu...</li>";
    }
  }

  propertySelect.addEventListener("change", updateCalculator);
  purposeSelect.addEventListener("change", updateCalculator);
  submitButton.addEventListener("click", () => {
    const property = propertySelect.value;
    const purpose = purposeSelect.value;

    if (property && purpose) {
      const propertyNames = {
        apartment: "dzīvoklis",
        house: "māja",
        land: "zeme",
        commercial: "komerctelpa",
      };

      const purposeNames = {
        credit: "Kredīts",
        sale: "Pārdošana",
        rent: "Īre",
      };

      localStorage.setItem("selectedProperty", propertyNames[property] || "");
      localStorage.setItem("selectedPurpose", purposeNames[purpose] || "");

      // 📌 Открываем модальное окно
      document.getElementById("request-modal").style.display = "flex";

      // 📌 Заполняем форму после нажатия кнопки
      fillRequestForm();
    } else {
      alert("Lūdzu, izvēlieties īpašumu un mērķi!");
    }
  });
});
