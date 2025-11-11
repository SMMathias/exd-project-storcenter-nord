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

// Infocards array
const fishCards = [
  {
    fishName: "Kejserfisk",
    fishSize: "20-30 cm",
    fishHabitat: "Lever ved koralrev",
    funFact1:
      "Føder sig af svampe og koraller og er kendt for sit farverige udseende.",
    funFact2:
      "Den ægte kejserfisk har en 'maske' over øjnene for at forvirre rovdyr.",
    image: "kejserfisk.svg",
    video: "",
  },
  {
    fishName: "Klovnefisk",
    fishSize: "Op til 9 cm",
    fishHabitat: "Lever i Stillehavets koralrev i søanemonens tentakler",
    funFact1: "Klovnefisk kan skifte køn, hvis hunnen dør eller forsvinder.",
    funFact2: "Klækker ud som små hanner og hunnerne er større end hannerne.",
    image: "klovnefisk.svg",
    video: "",
  },
  {
    fishName: "Kirurgfisk",
    fishSize: "15-30 cm",
    fishHabitat: "Tropiske koralrev over hele verden",
    funFact1:
      "Har skarpe pigge på haleroden, der ligner kirurgiske skalpeller.",
    funFact2: "Er en farverig revfisk, der svømmer omkring koralrev.",
    image: "kirurgfisk.svg",
    video: "",
  },
  {
    fishName: "Pudsefisk",
    fishSize: "Op til 14 cm",
    fishHabitat: "Bor i koralrev",
    funFact1:
      "Spiser parasitter og slim fra andre havdyr og hjælper med at holde dem rene.",
    funFact2:
      "Alle pudsefisk er født som hunner og kan skifte køn, når hannen forsvinder.",
    image: "pudsefisk.svg",
    video: "",
  },
  {
    fishName: "Blå chromis",
    fishSize: "Op til 8 cm",
    fishHabitat: "Koralrev",
    funFact1:
      "Den har en klar blå farve med sort stribe langs ryggen og forkedlet hale.",
    funFact2: "Lever hovedsageligt af små planktonorganismer.",
    image: "chromis.svg",
    video: "",
  },
  {
    fishName: "Rævefjæs",
    fishSize: "Op til 25 cm",
    fishHabitat: "Koralrev",
    funFact1: "Kendes på sin gul-orange krop og sort/hvide hoved.",
    funFact2: "Har svagt giftige pigstråler i ryggen som forsvar.",
    image: "raevefjaes.svg",
    video: "",
  },
  {
    fishName: "Sandspiser-gobi",
    fishSize: "5-8 cm",
    fishHabitat: "Sandbund ved koralrev",
    funFact1: "Kendt for at 'spise' sand for at finde føde.",
    funFact2: "Holder havbunden ren ved at filtrere sandet.",
    image: "gobi.svg",
    video: "",
  },
  {
    fishName: "Kuglefisk",
    fishSize: "30-35 cm",
    fishHabitat: "Tropiske have og koralrev",
    funFact1: "Kan puste sig op til en kugle som forsvar.",
    funFact2: "Har fire tænder og knuser skaller fra krebsdyr og bløddyr.",
    image: "kuglefisk.svg",
    video: "",
  },
];

const fishContainer = document.getElementById("infoScreen");

const positions = {
  Kejserfisk: { left: "10%", top: "20%" },
  Klovnefisk: { left: "40%", top: "30%" },
  Kirurgfisk: { left: "65%", top: "40%" },
  Pudsefisk: { left: "25%", top: "55%" },
  "Blå chromis": { left: "75%", top: "25%" },
  Rævefjæs: { left: "15%", top: "70%" },
  "Sandspiser-gobi": { left: "50%", top: "75%" },
  Kuglefisk: { left: "80%", top: "60%" },
};

const modal = document.getElementById("fishModal");
const closeModal = document.getElementById("closeModal");
const modalName = document.getElementById("modalName");
const modalImage = document.getElementById("modalImage");
const modalSize = document.getElementById("modalSize");
const modalFact1 = document.getElementById("modalFact1");
const modalFact2 = document.getElementById("modalFact2");

fishCards.forEach((fish) => {
  const card = document.createElement("div");
  card.classList.add("fishCard");

  card.style.position = "absolute";
  card.style.left = positions[fish.fishName]?.left || "50%";
  card.style.top = positions[fish.fishName]?.top || "50%";

  card.innerHTML = `
    <img src="img/${fish.image}" alt="${fish.fishName}" />
  `;

  card.addEventListener("click", () => {
    modalName.textContent = fish.fishName;
    modalImage.src = `img/${fish.image}`;
    modalImage.alt = fish.fishName;
    modalSize.textContent = fish.fishSize;
    modalFact1.textContent = fish.funFact1;
    modalFact2.textContent = fish.funFact2;
    modal.classList.remove("hidden");
  });

  fishContainer.appendChild(card);
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
