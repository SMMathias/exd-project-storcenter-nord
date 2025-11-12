"use strict";

// // infoskærm
// const ooux = [
//   {
//     id: "fish-card",
//     objekt: "Fisk (Infokort)",
//     relationer: { åbner: "popup-infoboks", tilhører: "environment" },
//     cta: ["showInfo", "playSound"],
//     attributter: { navn: "", billede: "", fakta: [], lydfil: "" },
//   },
//   {
//     id: "environment",
//     objekt: "environment (Baggrund + elementer)",
//     relationer: { indeholder: ["sten", "koraller", "muslinger", "fish-card"] },
//     cta: [],
//     attributter: { grafik: "", farver: [], animation: "" },
//   },
//   {
//     id: "popup-infoboks",
//     objekt: "Pop-up Infoboks",
//     relationer: { viserInfoOm: "fish-card" },
//     cta: ["playSound", "close"],
//     attributter: { titel: "", tekst: "", lydknap: true, lukkeknap: true },
//   },
//   {
//     id: "menu",
//     objekt: "Menu / Startområde",
//     relationer: { linkerTil: ["spil", "infoscreen"] },
//     cta: ["startGame", "showInfo"],
//     attributter: { knap: "Start" },
//   },
// ];

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
    video: "emperor-animation-novoice.mp4",
  },
  {
    fishName: "Klovnefisk",
    fishSize: "Op til 9 cm",
    fishHabitat: "Lever i Stillehavets koralrev i søanemonens tentakler",
    funFact1: "Klovnefisk kan skifte køn, hvis hunnen dør eller forsvinder.",
    funFact2: "Klækker ud som små hanner og hunnerne er større end hannerne.",
    image: "klovnefisk.svg",
    video: "klovnefisk-foley-bubble-true.mp4",
  },
  {
    fishName: "Kirurgfisk",
    fishSize: "15-30 cm",
    fishHabitat: "Tropiske koralrev over hele verden",
    funFact1:
      "Har skarpe pigge på haleroden, der ligner kirurgiske skalpeller.",
    funFact2: "Er en farverig revfisk, der svømmer omkring koralrev.",
    image: "kirurgfisk.svg",
    video: "kirurg-animation-novoice.mp4",
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
    video: "cleaner-animation-novoice.mp4",
  },
  {
    fishName: "Blå-chromis",
    fishSize: "Op til 8 cm",
    fishHabitat: "Koralrev",
    funFact1:
      "Den har en klar blå farve med sort stribe langs ryggen og forkedlet hale.",
    funFact2: "Lever hovedsageligt af små planktonorganismer.",
    image: "chromis.svg",
    video: "chromi-animation-novoice.mp4",
  },
  {
    fishName: "Rævefjæs",
    fishSize: "Op til 25 cm",
    fishHabitat: "Koralrev",
    funFact1: "Kendes på sin gul-orange krop og sort/hvide hoved.",
    funFact2: "Har svagt giftige pigstråler i ryggen som forsvar.",
    image: "raevefjaes.svg",
    video: "foxface-animatio-novoice.mp4",
  },
  {
    fishName: "Sandspiser-gobi",
    fishSize: "5-8 cm",
    fishHabitat: "Sandbund ved koralrev",
    funFact1: "Kendt for at 'spise' sand for at finde føde.",
    funFact2: "Holder havbunden ren ved at filtrere sandet.",
    image: "gobi.svg",
    video: "sandspiser-animation-novoice.mp4",
  },
  {
    fishName: "Kuglefisk",
    fishSize: "30-35 cm",
    fishHabitat: "Tropiske have og koralrev",
    funFact1: "Kan puste sig op til en kugle som forsvar.",
    funFact2: "Har fire tænder og knuser skaller fra krebsdyr og bløddyr.",
    image: "kuglefisk.svg",
    video: "kugle-animation-novoice.mp4",
  },
];

const gameScreen = document.getElementById("gameScreen");
const infoScreen = document.getElementById("infoScreen");
const startBtn = document.getElementById("startBtn");
const backToMenu = document.getElementById("backToMenu");
const select = document.getElementById("characterSelect");
const choose = document.getElementById("chooseFish");
// knapper

startBtn.addEventListener("click", function () {
  infoScreen.classList.add("hidden");
  select.classList.remove("hidden");
});

choose.addEventListener("click", function () {
  select.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startGame();
});

backToMenu.addEventListener("click", function () {
  infoScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
});

const characters = [
  {
    characName: "Kuglefisk",
    image: "kuglefisk.svg",
    gif: "kuglefisk/kuglefisk-gif-done.gif",
  },
  {
    characName: "Gobi",
    image: "gobi.svg",
    gif: "gobifisk/gobifisk-gif-done.gif",
  },
  {
    characName: "Kejserfisk",
    image: "kejserfisk.svg",
    gif: "rabbitfish/rabbitface-gif.gif",
  },
];

let selectedFishIndex = 0;

const fishContainer = document.getElementById("infoScreen");

const positions = {
  Kejserfisk: { left: "10%", top: "20%" },
  Klovnefisk: { left: "45%", top: "40%" },
  Kirurgfisk: { left: "65%", top: "40%" },
  Pudsefisk: { left: "25%", top: "64%" },
  "Blå-chromis": { left: "75%", top: "10%" },
  Rævefjæs: { left: "70%", top: "76%" },
  "Sandspiser-gobi": { left: "10%", top: "98%" },
  Kuglefisk: { left: "80%", top: "60%" },
};

const modal = document.getElementById("fishModal");
const closeModal = document.getElementById("closeModal");
const modalName = document.getElementById("modalName");
const modalVideo = document.getElementById("modalVideo");
const modalSize = document.getElementById("modalSize");
const modalFact1 = document.getElementById("modalFact1");
const modalFact2 = document.getElementById("modalFact2");

fishCards.forEach((fish) => {
  const card = document.createElement("div");
  card.classList.add("fishCard");
  card.classList.add(fish.fishName);

  card.style.position = "absolute";
  card.style.left = positions[fish.fishName]?.left || "50%";
  card.style.top = positions[fish.fishName]?.top || "50%";

  card.innerHTML = `
    <img src="img/${fish.image}" alt="${fish.fishName}" />
  `;

  card.addEventListener("click", () => {
    modalName.textContent = fish.fishName;
    modalVideo.src = `video/${fish.video}`;
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

// character selection
characters.forEach((fish, index) => {
  const option = document.createElement("div"); // laver et nyt div-element
  option.classList.add("characterOption"); // giver det klassen
  option.innerHTML = `
    <img src="img/${fish.image}" alt="${fish.characName}">
    <p>${fish.characName}</p>
  `;

  let selectedFishIndex = 0;
  document.querySelectorAll(".characterOption").forEach((option, index) => {
    option.addEventListener("click", () => {
      selectedFishIndex = index;
    });
  });

  // når man klikker, vælges den fisk
  option.addEventListener("click", () => {
    selectedFishIndex = index;
    console.log(`Du valgte: ${fish.characName}`);
  });

  select.appendChild(option); // tilføj til HTML’en
});

// Spillet

// dom-manipulation til game setup
const canvas = document.getElementById("gameCanvas");

// Gør spillet 2d :)
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 600;

let points = 0;
let stars = [];
let fishX = canvas.width / 2 - 25; // i midten af canvaset
let fishY = canvas.height - 120; // lidt over bunden sådan ja kan altid justeresr
let fishWidth = 70;
let fishHeight = 70;
let fishSpeed = 6;

const fishImg = new Image();
const starImg = new Image();
starImg.src = "img/points.svg";

// ---------- SPILLE FUNKTIONEERRRRRRR-----------
// laver stjerner
function createStar() {
  const x = Math.random() * (canvas.width - 40);
  const y = -40;
  stars.push({ x, y, size: 30 });
}

// tegner fisken (gif) + array skal opdateres :=)
function drawFish() {
  ctx.drawImage(fishImg, fishX, fishY, fishWidth, fishHeight); // vi tager fat i let variablerne ovenover her og vores fishImg const :)
}

// tegner spillet
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // rydder skærmen hver frame

  drawFish();

  // tegn stjerner
  stars.forEach((star) => {
    ctx.drawImage(starImg, star.x, star.y, star.size, star.size);
  });

  // opdater score
  ctx.fillStyle = "black";
  ctx.font = "20px Mali";
  ctx.fillText(`${points}`, 20, 30);
}

// får stjerner til at beævæge sig nedad skærmen
function updateStars() {
  stars.forEach((star) => (star.y += 3)); // 3 er antallet af pixel pr frame
  stars = stars.filter((star) => star.y < canvas.height + 20); // filter beholder kun stjerner, der stadig er i canvaset
}

// her tjekkes om en fisk rammer en stjerne
function checkCollision() {
  stars.forEach((star, i) => {
    if (
      fishX < star.x + star.size &&
      fishX + fishWidth > star.x &&
      fishY < star.y + star.size &&
      fishY + fishHeight > star.y
    ) {
      stars.splice(i, 1); // her fjernes stjernen, hvis der er collision
      points++; // giver pointsssss
    }
  });
}

// looper bare spillet igennem
function gameLoop() {
  updateStars(); // bevæg stjernerne
  checkCollision(); // tjek om fisken rammer en
  draw(); // tegn alt igen (fisk, stjerner, score) uendeligt yuurrrrr
  requestAnimationFrame(gameLoop); // kør funktionen igen + 60 fps
}

// lille smule eventlisteners
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && fishX > 0) fishX -= fishSpeed;
  if (e.key === "ArrowRight" && fishX < canvas.width - fishWidth)
    fishX += fishSpeed;
});

// OG til touch så vi kan teste begge: https://smmathias.github.io/exd-project-storcenter-nord/

// Tilføj touch-styring
let touchX = null;

canvas.addEventListener("touchstart", (e) => {
  touchX = e.touches[0].clientX;
});

canvas.addEventListener("touchmove", (e) => {
  const newTouchX = e.touches[0].clientX;
  const diff = newTouchX - touchX;

  // Flyt fisken vandret
  fishX += diff * 0.5; // multiplier styrer følsomheden
  touchX = newTouchX;

  // Begræns fisken så den ikke går udenfor canvas
  if (fishX < 0) fishX = 0;
  if (fishX > canvas.width - fishWidth) fishX = canvas.width - fishWidth;
});

function startGame() {
  fishImg.src = `gif-copy/${characters[selectedFishIndex].gif}`;
  if (!fishImg.src) {
    console.warn("Kunne ikke finde gif i Image/. Tjek filnavn og sti.");
  }
  fishImg.onload = () => {
    setInterval(createStar, 1000); // stjerne hvet sekund
    gameLoop();
  };
}
