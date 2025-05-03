// script.js
import {
  sinal,
  oferecimento,
  credo,
  beadIds,
  avemaria,
  painosso,
  salveRainha,
  ohmeujesus,
  primeiromisteriogozoso,
  segundomisteriogozoso,
  terceiromisteriogozoso,
  quartomisterigozoso,
  quintomisteriogozoso,
  primeiromisteriodoloroso,
  segundomisteriodoloroso,
  terceiromisteriodoloroso,
  quartomisteriodoloroso,
  quintomisteriodoloroso,
  primeiromisterioglorioso,
  segundomisterioglorioso,
  terceiromisterioglorioso,
  quartomisterioglorioso,
  quintomisterioglorioso,
  primeiromisterioluminoso,
  segundomisterioluminoso,
  terceiromisterioluminoso,
  quartomisterioluminoso,
  quintomisterioluminoso
} from './dados.js';

const startButton = document.getElementById('start-button');
const prayerSection = document.getElementById('prayer-section');
const modelText = document.getElementById('model-text');
const prayerInput = document.getElementById('prayer-input');
const confirmButton = document.getElementById('confirm-button');
const progressContent = document.getElementById('checklist-content');
const objectElement = document.getElementById("rosaryObject");
const btnNext = document.getElementById("btnNext");
const btnSkip = document.getElementById("btnSkip");
const mysterySelect = document.getElementById("mystery-select");

btnSkip.disabled = false;

let stage = "sinal";
let currentLine = 0;
let currentAveIndex = 0;
let currentIndex = -1;
let mysteries = [];
let currentMysteryIndex = 0;

function updateProgress(title, list, prefix) {
  progressContent.innerHTML = "";
  const section = document.createElement('div');
  const header = document.createElement('h3');
  header.textContent = title;
  section.appendChild(header);

  const ul = document.createElement('ul');
  list.forEach((line, i) => {
    const li = document.createElement('li');
    li.id = `${prefix}-${i}`;
    li.textContent = line;
    if (currentLine > i) li.classList.add('completed');
    ul.appendChild(li);
  });
  section.appendChild(ul);
  progressContent.appendChild(section);
}

function getCurrentList() {
  switch (stage) {
    case "sinal": return sinal;
    case "oferecimento": return oferecimento;
    case "credo": return credo;
    case "pn1": return painosso;
    case "ave1": return avemaria;
    case "ave2": return avemaria;
    case "ave3": return avemaria;
    case "pn2": return painosso;
    case "misterio": return [mysteries[currentMysteryIndex]];
    case "ave10": return avemaria;
    case "ohmeujesus": return ohmeujesus;
    case "salve": return salveRainha;
    default: return [];
  }
}

function getTitle() {
  switch (stage) {
    case "sinal": return "Sinal da Cruz";
    case "oferecimento": return "Oferecimento";
    case "credo": return "Credo";
    case "pn1": return "Pai Nosso";
    case "ave1": return "1ª Ave Maria";
    case "ave2": return "2ª Ave Maria";
    case "ave3": return "3ª Ave Maria";
    case "pn2": return "Pai Nosso";
    case "misterio": return `${currentMysteryIndex + 1}º Mistério`;
    case "ave10": return `Ave Maria ${currentAveIndex + 1}/10`;
    case "ohmeujesus": return "Ó Meu Jesus";
    case "salve": return "Salve Rainha";
    default: return "";
  }
}

startButton.addEventListener('click', () => {
  const selected = mysterySelect.value;
  if (selected === "gozosos") mysteries = [primeiromisteriogozoso, segundomisteriogozoso, terceiromisteriogozoso, quartomisterigozoso, quintomisteriogozoso];
  else if (selected === "dolorosos") mysteries = [primeiromisteriodoloroso, segundomisteriodoloroso, terceiromisteriodoloroso, quartomisteriodoloroso, quintomisteriodoloroso];
  else if (selected === "gloriosos") mysteries = [primeiromisterioglorioso, segundomisterioglorioso, terceiromisterioglorioso, quartomisterioglorioso, quintomisterioglorioso];
  else if (selected === "luminosos") mysteries = [primeiromisterioluminoso, segundomisterioluminoso, terceiromisterioluminoso, quartomisterioluminoso, quintomisterioluminoso];
  else if (selected === "completo") mysteries = [
    primeiromisteriogozoso, segundomisteriogozoso, terceiromisteriogozoso, quartomisterigozoso, quintomisteriogozoso,
    primeiromisteriodoloroso, segundomisteriodoloroso, terceiromisteriodoloroso, quartomisteriodoloroso, quintomisteriodoloroso,
    primeiromisterioluminoso, segundomisterioluminoso, terceiromisterioluminoso, quartomisterioluminoso, quintomisterioluminoso,
    primeiromisterioglorioso, segundomisterioglorioso, terceiromisterioglorioso, quartomisterioglorioso, quintomisterioglorioso
  ];

  startButton.style.display = 'none';
  document.getElementById('intro-box').style.display = 'none';
  prayerSection.style.display = 'flex';
  modelText.textContent = getCurrentList()[currentLine];
  updateProgress(getTitle(), getCurrentList(), stage);
});

confirmButton.addEventListener('click', () => advanceLine());
btnSkip.addEventListener('click', () => advanceLine(true));

function updateBead() {
  const svgDoc = objectElement.contentDocument;
  const bead = svgDoc?.getElementById(beadIds[++currentIndex]);
  if (bead) {
    bead.style.fill = "yellow";
    bead.style.stroke = "orange";
    bead.style.strokeWidth = "2px";
  }
}

function advanceLine(skip = false) {
  const currentList = getCurrentList();
  if (!skip && prayerInput.value.trim() === "") {
    alert("Por favor, escreva a oração antes de confirmar.");
    return;
  }

  const prefix = `${stage}`;
  const lineElement = document.getElementById(`${prefix}-${currentLine}`);
  if (lineElement) lineElement.classList.add('completed');

  prayerInput.value = "";
  currentLine++;

  if (currentLine < currentList.length) {
    modelText.textContent = currentList[currentLine];
  } else {
    currentLine = 0;
    switch (stage) {
      case "sinal":
        stage = "oferecimento";
        updateBead();
        break;
      case "oferecimento":
        stage = "credo";
        break;
      case "credo":
        stage = "pn1";
        updateBead();
        break;
      case "pn1":
        stage = "ave1";
        updateBead();
        break;
      case "ave1":
        stage = "ave2";
        updateBead();
        break;
      case "ave2":
        stage = "ave3";
        updateBead();
        break;
      case "ave3":
        stage = "pn2";
        updateBead();
        break;
      case "pn2":
        stage = "misterio";
        updateBead();
        break; 
      case "misterio":
        stage = "ave10";
        currentAveIndex = 0;
        updateBead();
        break;
      case "ave10":
        currentAveIndex++;
        if (currentAveIndex < 10) {
          updateBead();
        } else {
          stage = "ohmeujesus";
        }
        break;
      case "ohmeujesus":
        currentMysteryIndex++;
        if (currentMysteryIndex >= mysteries.length) {
          stage = "salve";
        } else {
          stage = "pn2";
        }
        break;
      case "salve":
        modelText.textContent = "Rosário completo. 🙏 Que Maria te acompanhe!";
        prayerInput.style.display = 'none';
        confirmButton.style.display = 'none';
        btnSkip.style.display = 'none';
        progressContent.innerHTML += "<p><strong>Salve Rainha finalizada ✅</strong></p>";
        return;
    }
    modelText.textContent = getCurrentList()[currentLine];
    updateProgress(getTitle(), getCurrentList(), stage);
  }
}

objectElement.addEventListener("load", () => {
  btnNext.disabled = false;
  btnNext.addEventListener("click", () => {});
});
