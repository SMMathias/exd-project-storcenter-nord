"use strict";

// infoskærm
const infoScreen = [
  {
    id: "fish-card",
    objekt: "Fisk (Infokort)",
    relationer: { åbner: "popup-infoboks", tilhører: "environment" },
    cta: ["showInfo", "playSound"],
    attributter: { navn: "", billede: "", fakta: [], lydfil: "" },
  },
  {
    id: "environment",
    objekt: "environment (Baggrund + elementer)",
    relationer: { indeholder: ["sten", "koraller", "muslinger", "fish-card"] },
    cta: [],
    attributter: { grafik: "", farver: [], animation: "" },
  },
  {
    id: "popup-infoboks",
    objekt: "Pop-up Infoboks",
    relationer: { viserInfoOm: "fish-card" },
    cta: ["playSound", "close"],
    attributter: { titel: "", tekst: "", lydknap: true, lukkeknap: true },
  },
  {
    id: "menu",
    objekt: "Menu / Startområde",
    relationer: { linkerTil: ["spil", "infoscreen"] },
    cta: ["startGame", "showInfo"],
    attributter: { knap: "Start" },
  },
];

infoScreen.forEach((obj) => {
  console.log("Viser", obj.objekt);
});
