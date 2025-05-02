// dados.js

// === TEXTOS DE ORAÇÃO ===
const sinal = [
    "Vamos começar com o sinal da cruz. Em nome do Pai, do Filho e do Espírito Santo. Amém."
  ];
  
  const oferecimento = [
    "Divino Jesus, eu ofereço este terço que vou rezar.",
    "Quero lembrar os mistérios da nossa salvação.",
    "Peço, pela intercessão de Maria, Vossa Mãe Santíssima,",
    "as graças de que preciso para rezar com amor e fé.",
    "Quero também ganhar as bênçãos dessa santa devoção."
  ];
  
  const credo = [
    "Creio em Deus Pai, Todo-Poderoso,",
    "Criador do céu e da terra.",
    "E em Jesus Cristo, seu único Filho, nosso Senhor.",
    "Ele foi concebido pelo Espírito Santo.",
    "Nasceu da Virgem Maria.",
    "Sofreu sob Pôncio Pilatos.",
    "Foi crucificado, morreu e foi sepultado.",
    "Desceu à mansão dos mortos.",
    "Ressuscitou no terceiro dia.",
    "Subiu aos céus.",
    "Está à direita de Deus Pai Todo-Poderoso.",
    "De onde virá julgar os vivos e os mortos.",
    "Creio no Espírito Santo.",
    "Na Santa Igreja Católica.",
    "Na comunhão dos santos.",
    "No perdão dos pecados.",
    "Na ressurreição do corpo.",
    "E na vida eterna.",
    "Amém."
  ];
  
  const painossodepoisdocredo = [
    [
      "Pai Nosso que estais no céu,",
      "santificado seja o Vosso nome,",
      "venha a nós o Vosso reino,",
      "seja feita a Vossa vontade, assim na terra como no céu.",
      "O pão nosso de cada dia nos dai hoje,",
      "perdoai-nos as nossas ofensas,",
      "assim como nós perdoamos a quem nos tem ofendido,",
      "e não nos deixeis cair em tentação,",
      "mas livrai-nos do mal. Amém."
    ]
  ];
  
  const avemariaintro1 = [
    "Ave Maria, cheia de graça, o Senhor é convosco.",
    "Bendita sois vós entre as mulheres,",
    "e bendito é o fruto do vosso ventre, Jesus.",
    "Santa Maria, Mãe de Deus,",
    "rogai por nós, pecadores,",
    "agora e na hora de nossa morte. Amém."
  ];
  
  const avemariaintro2 = [...avemariaintro1];
  const avemariaintro3 = [...avemariaintro1];
  
  const painossodepoisdostresavesmaria = [
    [
      "Pai Nosso que estais no céu,",
      "santificado seja o Vosso nome,",
      "venha a nós o Vosso reino,",
      "seja feita a Vossa vontade, assim na terra como no céu.",
      "O pão nosso de cada dia nos dai hoje,",
      "perdoai-nos as nossas ofensas,",
      "assim como nós perdoamos a quem nos tem ofendido,",
      "e não nos deixeis cair em tentação,",
      "mas livrai-nos do mal. Amém."
    ]
  ];
  
  const salveRainha = [
    "Salve, Rainha, Mãe de Misericórdia,",
    "vida, doçura e esperança nossa, Salve.",
    "A Vós bradamos, os degredados filhos de Eva.",
    "A Vós suspiramos, gemendo e chorando neste vale de lágrimas.",
    "Eia, pois, Advogada nossa,",
    "esses Vossos olhos misericordiosos a nós volvei;",
    "e depois deste desterro nos mostrai Jesus,",
    "bendito Fruto do Vosso ventre.",
    "Ó clemente, ó piedosa,",
    "ó doce sempre Virgem Maria.",
    "V. Rogai por nós, Santa Mãe de Deus,",
    "R. Para que sejamos dignos das promessas de Cristo.",
    "Amém."
  ];
  
  const introduction = [...sinal, ...oferecimento, ...credo];
  const sinalLength = sinal.length;
  const oferecimentoLength = oferecimento.length;
  const credoLength = credo.length;
  
  // === IDS DAS CONTAS DO ROSÁRIO ===
  const beadIds = [
    "rect4816", "path4814", "path14069", "path14061", "path14067", "path14074", "path10234",
    "path13745", "path13747", "path13749", "path13751", "path13753", "path13755", "path13759",
    "path13761", "path13763", "path13743", "path9441", "path13876", "path13894", "path13892",
    "path13890", "path13888", "path13886", "path13884", "path13882", "path13880", "path13878",
    "path3931", "path13900", "path13956", "path13954", "path13952", "path13950", "path13960",
    "path13962", "path13964", "path13966", "path13958", "path9475", "path13799", "path13801",
    "path13803", "path13805", "path13807", "path13809", "path13811", "path13813", "path13815",
    "path13797", "path9439", "path13765", "path13783", "path13781", "path13779", "path13777",
    "path13775", "path13773", "path13771", "path13769", "path13767"
  ];
  
  // === EXPORTAÇÕES ===
  export {
    sinal,
    oferecimento,
    credo,
    introduction,
    sinalLength,
    oferecimentoLength,
    credoLength,
    beadIds,
    avemariaintro1,
    avemariaintro2,
    avemariaintro3,
    painossodepoisdocredo,
    painossodepoisdostresavesmaria,
    salveRainha
  };
  