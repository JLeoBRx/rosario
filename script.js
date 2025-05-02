import {
  sinal,
  oferecimento,
  credo,
  beadIds,
  avemariaintro1,
  avemariaintro2,
  avemariaintro3,
  painossodepoisdocredo,
  painossodepoisdostresavesmaria,
  salveRainha
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

btnSkip.disabled = false;

let isCruz = true;
let isOferecimento = false;
let isCredo = false;
let isPainossodepoisdocredo = false;
let isAvemaria1 = false;
let isAvemaria2 = false;
let isAvemaria3 = false;
let isPainossodepoisdostresavesmaria = false;

let currentLine = 0;
let currentIndex = -1;

function updateProgress() {
  progressContent.innerHTML = "";

  const createSection = (title, list, prefix) => {
    const section = document.createElement('div');
    const header = document.createElement('h3');
    header.textContent = title;
    section.appendChild(header);

    const ul = document.createElement('ul');
    list.forEach((line, index) => {
      const li = document.createElement('li');
      li.id = `${prefix}-${index}`;
      li.textContent = line;
      if (currentLine > index) li.classList.add('completed');
      ul.appendChild(li);
    });

    section.appendChild(ul);
    return section;
  };

  if (isCruz) {
    progressContent.appendChild(createSection("Sinal da Cruz", sinal, "sinal"));
  } else if (isOferecimento) {
    progressContent.appendChild(createSection("Oferecimento", oferecimento, "oferecimento"));
  } else if (isCredo) {
    progressContent.appendChild(createSection("Credo", credo, "credo"));
  } else if (isPainossodepoisdocredo) {
    progressContent.appendChild(createSection("Pai Nosso", painossodepoisdocredo[0], "pn1"));
  } else if (isAvemaria1) {
    progressContent.appendChild(createSection("Ave Maria 1", avemariaintro1, "ave1"));
  } else if (isAvemaria2) {
    progressContent.appendChild(createSection("Ave Maria 2", avemariaintro2, "ave2"));
  } else if (isAvemaria3) {
    progressContent.appendChild(createSection("Ave Maria 3", avemariaintro3, "ave3"));
  } else if (isPainossodepoisdostresavesmaria) {
    progressContent.appendChild(createSection("Pai Nosso após 3 Ave Marias", painossodepoisdostresavesmaria[0], "pn2"));
  }
}

function updateBead(beadId) {
  const svgDoc = objectElement.contentDocument;
  const bead = svgDoc?.getElementById(beadId);
  if (bead) {
    bead.style.fill = "yellow";
    bead.style.stroke = "orange";
    bead.style.strokeWidth = "2px";
  }
}

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  document.getElementById('intro-box').style.display = 'none';
  prayerSection.style.display = 'flex';
  modelText.textContent = sinal[currentLine];
  updateProgress();
  updateBead(beadIds[++currentIndex]); // Inicia com a cruz
});

confirmButton.addEventListener('click', () => advanceLine());
btnSkip.addEventListener('click', () => advanceLine(true));

function advanceLine(skip = false) {
  if ((isOferecimento || isCredo || isAvemaria1 || isAvemaria2 || isAvemaria3 || isPainossodepoisdocredo || isPainossodepoisdostresavesmaria) && !skip && prayerInput.value.trim() === "") {
    alert("Por favor, escreva a oração antes de confirmar.");
    return;
  }

  const prefix = isCruz ? "sinal" :
                 isOferecimento ? "oferecimento" :
                 isCredo ? "credo" :
                 isPainossodepoisdocredo ? "pn1" :
                 isAvemaria1 ? "ave1" :
                 isAvemaria2 ? "ave2" :
                 isAvemaria3 ? "ave3" :
                 isPainossodepoisdostresavesmaria ? "pn2" : "";

  const lineElement = document.getElementById(`${prefix}-${currentLine}`);
  if (lineElement) lineElement.classList.add('completed');

  prayerInput.value = "";
  currentLine++;

  const list = isCruz ? sinal :
               isOferecimento ? oferecimento :
               isCredo ? credo :
               isPainossodepoisdocredo ? painossodepoisdocredo[0] :
               isAvemaria1 ? avemariaintro1 :
               isAvemaria2 ? avemariaintro2 :
               isAvemaria3 ? avemariaintro3 :
               isPainossodepoisdostresavesmaria ? painossodepoisdostresavesmaria[0] : [];

  if (currentLine < list.length) {
    modelText.textContent = list[currentLine];
  } else {
    currentLine = 0;
    if (isCruz) {
      isCruz = false;
      isOferecimento = true;
      modelText.textContent = oferecimento[currentLine];
    } else if (isOferecimento) {
      isOferecimento = false;
      isCredo = true;
      modelText.textContent = credo[currentLine];
    } else if (isCredo) {
      isCredo = false;
      isPainossodepoisdocredo = true;
      modelText.textContent = painossodepoisdocredo[0][currentLine];
      updateBead(beadIds[++currentIndex]);
    } else if (isPainossodepoisdocredo) {
      isPainossodepoisdocredo = false;
      isAvemaria1 = true;
      modelText.textContent = avemariaintro1[currentLine];
      updateBead(beadIds[++currentIndex]);
    } else if (isAvemaria1) {
      isAvemaria1 = false;
      isAvemaria2 = true;
      modelText.textContent = avemariaintro2[currentLine];
      updateBead(beadIds[++currentIndex]);
    } else if (isAvemaria2) {
      isAvemaria2 = false;
      isAvemaria3 = true;
      modelText.textContent = avemariaintro3[currentLine];
      updateBead(beadIds[++currentIndex]);
    } else if (isAvemaria3) {
      isAvemaria3 = false;
      isPainossodepoisdostresavesmaria = true;
      modelText.textContent = painossodepoisdostresavesmaria[0][currentLine];
      updateBead(beadIds[++currentIndex]);
    } else if (isPainossodepoisdostresavesmaria) {
      isPainossodepoisdostresavesmaria = false;
      modelText.textContent = "Rito inicial completo. Pronto para os mistérios.";
      prayerInput.style.display = 'none';
      confirmButton.style.display = 'none';
      btnSkip.style.display = 'none';
      progressContent.innerHTML = "<p><strong>Rito Inicial Completo ✅</strong></p>";
      return;
    }
  }
  updateProgress();
}

objectElement.addEventListener("load", () => {
  btnNext.disabled = false;
  btnNext.addEventListener("click", () => {
    currentIndex++;
    const svgDoc = objectElement.contentDocument;
    if (!svgDoc || currentIndex >= beadIds.length) return;
    const bead = svgDoc.getElementById(beadIds[currentIndex]);
    if (bead) {
      bead.style.fill = "yellow";
      bead.style.stroke = "orange";
      bead.style.strokeWidth = "2px";
    }
  });
});
