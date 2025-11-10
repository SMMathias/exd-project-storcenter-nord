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

// Infocards array
const infoCards = [
  {
    fishName: "Kejserfisk",
    fishSize: "20-30 cm",
    fishHabitat: "Lever ved koralrev",
    funFact1:
      "Føder sig af svampe og koraller og er kendt for sit farverige udseende.",
    funFact2:
      "Den ægte kejserfisk har en 'maske' over øjnene for at forvirre rovdyr.",
  },
  {
    fishName: "Klovnefisk (han)",
    fishSize: "Op til 9 cm",
    fishHabitat: "Lever i Stillehavets koralrev i søanemonens tentakler",
    funFact1: "Klovnefisk kan skifte køn, hvis hunnen dør eller forsvinder.",
    funFact2: "Klækker ud som små hanner og hunnerne er større end hannerne.",
  },
  {
    fishName: "Kirurgfisk",
    fishSize: "15-30 cm",
    fishHabitat: "Tropiske koralrev over hele verden",
    funFact1:
      "Har skarpe pigge på haleroden, der ligner kirurgiske skalpeller.",
    funFact2: "Er en farverig revfisk, der svømmer omkring koralrev.",
  },
  {
    fishName: "Pudsefisk (kvinde)",
    fishSize: "Op til 14 cm",
    fishHabitat: "Bor i koralrev",
    funFact1:
      "Spiser parasitter og slim fra andre havdyr og hjælper med at holde dem rene.",
    funFact2:
      "Alle pudsefisk er født som hunner og kan skifte køn, når hannen forsvinder.",
  },
  {
    fishName: "Blå chromis",
    fishSize: "Op til 8 cm",
    fishHabitat: "Koralrev",
    funFact1:
      "Den har en klar blå farve med sort stribe langs ryggen og forkedlet hale.",
    funFact2: "Lever hovedsageligt af små planktonorganismer.",
  },
  {
    fishName: "Rævefjæs",
    fishSize: "Op til 25 cm",
    fishHabitat: "Koralrev",
    funFact1: "Kendes på sin gul-orange krop og sort/hvide hoved.",
    funFact2: "Har svagt giftige pigstråler i ryggen som forsvar.",
  },
  {
    fishName: "Sandspiser-gobi (Sandkutling)",
    fishSize: "5-8 cm",
    fishHabitat: "Sandbund ved koralrev",
    funFact1: "Kendt for at 'spise' sand for at finde føde.",
    funFact2: "Holder havbunden ren ved at filtrere sandet.",
  },
  {
    fishName: "Kuglefisk",
    fishSize: "30-35 cm",
    fishHabitat: "Tropiske have og koralrev",
    funFact1: "Kan puste sig op til en kugle som forsvar.",
    funFact2: "Har fire tænder og knuser skaller fra krebsdyr og bløddyr.",
  },
];
