const SR = {
  name: "EDO",
  email: "Edo@apcaims.com",
  password: "edo_apc_jt3",
  phone: "08108850572",
  statecode: "EDO",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "EDO",
  state: "EDO",
  lga: [
    {
      wards: [
        "ENWAN/ATTE/IKPESHI/EGBIGELE",
        "IBILLO/ EKPESA/ EKOR/ IKIRAN-ILE/ OKE",
        "IGARRA I",
        "IGARRA II",
        "IMOGA/ LAMPESE/ BEKUMA/ EKPE",
        "MAKEKE/ OJAH/ DANGBALA/ OJIRAMI/ ANYAWOZA",
        "OLOMA/ OKPE/ IJAJA/ KAKUMA/ ANYARA",
        "OSOSO",
        "SOMORIKA / OGBE / SASARO / ONUMU / ESHAWA / OGUGU IGBOSHI-AFE / IGBOSHI - ELE / AIYEGUNLE",
        "UNEME-NEKHUA/AKPAMA/ AIYETORO/ EKPEDO/ ERHURUN/ UNEME OSU",
      ],
      name: "AKOKO EDO",
    },
    {
      wards: [
        "EGOR",
        "EVBAREKE",
        "OGIDA/USE",
        "OKHORO",
        "OLIHA",
        "OTUBU",
        "UGBOWO",
        "USELU I",
        "USELU II",
        "UWELU",
      ],
      name: "EGOR",
    },
    {
      wards: [
        "EWU I",
        "EWU II",
        "IKEKATO",
        "OPOJI",
        "OTORUWO I",
        "OTORUWO II",
        "UGBEGUN",
        "UNEAH",
        "UWESSAN I",
        "UWESSAN II",
      ],
      name: "ESAN CENTRAL",
    },
    {
      wards: [
        "AMEDOKHIAN",
        "ARUE",
        "EFANDION",
        "EGBELE",
        "EWOYI",
        "IDUMU-OKOJIE",
        "OBEIDU",
        "UBIERUMU",
        "UELEN/ OKUGBE",
        "UWALOR",
        "UZEA",
        "EMU",
        "EWATTO",
        "EWOHIMI I",
        "EWOHIMI II",
        "ILLUSHI I",
        "ILLUSHI II",
        "OHORDUA",
        "UBIAJA I",
        "UBIAJA II",
        "UGBOHA",
      ],
      name: "ESAN NORTH EAST",
    },
    {
      wards: [
        "EMU",
        "EWATTO",
        "EWOHIMI I",
        "EWOHIMI II",
        "ILLUSHI I",
        "ILLUSHI II",
        "OHORDUA",
        "UBIAJA I",
        "UBIAJA II",
        "UGBOHA",
      ],
      name: "ESAN SOUTH EAST",
    },
    {
      wards: [
        "EGORO/IDOA/UKHUN",
        "EMAUDO/ EGUARE/ EKPOMA",
        "EMUHI/ UKPENU/ UJOELEN",
        "IHUNMUDUMU/IDUMEBO/UKE/UJEMEN",
        "ILLEH/EKO-INE",
        "IRUEKPEN",
        "OGWA",
        "UHIELE",
        "UJIOGBA",
        "UROHI",
      ],
      name: "ESAN WEST",
    },
    {
      wards: [
        "ANWAIN",
        "AUCHI",
        "AUCHI III",
        "AUCHI I",
        "AUCHI II",
        "AVIELE",
        "JAGBE",
        "SOUTH IBIE",
        "UZAIRUE NORTH EAST",
        "UZAIRUE NORTH WEST",
        "UZAIRUE SOUTH EAST",
        "UZAIRUE SOUTH WEST",
      ],
      name: "ETSAKO WEST",
    },
    {
      wards: [
        "EKPERI I",
        "EKPERI II",
        "EKPERI III",
        "FUGAR I",
        "FUGAR II",
        "FUGAR III",
        "IRAOKHOR",
        "OGBONA",
        "SOUTH UNEME I",
        "SOUTH UNEME II",
      ],
      name: "ETSAKO CENTRAL",
    },
    {
      wards: [
        "AGENEBODE",
        "OKPEKPE",
        "OKPELLA I",
        "OKPELLA II",
        "OKPELLA III",
        "OKPELLA IV",
        "THREE IBIES",
        "WANNO I",
        "WANNO II",
        "WEPPA",
      ],
      name: "ETSAKO EAST",
    },
    {
      wards: [
        "AFUDA/IDUMUOKA",
        "AMAHOR/UGUN",
        "EKEKHEN/IDUMU/OGO/EGBIKE",
        "EKPON",
        "EWOSSA",
        "IDIGUN/ IDUMEDO",
        "OKALO/ OKPUJIE",
        "OWU/ OKUTA/ EGUARE EBELLE",
        "UDO",
        "UHE/IDUMUOGBO/IDUMUEKE",
      ],
      name: "IGUEBEN",
    },
    {
      wards: [
        "ADUWAWA / EVBO MODU",
        "GORRETTI",
        "IDOGBO",
        "IWOGBAN/UTEH",
        "OBAYANTOR",
        "OGBESON",
        "OLOGBO",
        "OREGBENI",
        "ST. SAVIOUR",
        "UGBEKUN",
      ],
      name: "IKPOBA/OKHA",
    },
    {
      wards: [
        "GRA/ETETE",
        "IBIWE/ IWEGIE/ UGBAGUE",
        "IHOGBE/ ISEKHERE/ OREOGHENE/ IBIWE/ ICE ROAD",
        "IKPEMA/EGUADASE",
        "NEW BENIN I",
        "NEW BENIN II",
        "OGBE",
        "OGBELAKA/ NEKPENEKPEN",
        "OREDO",
        "UNUERU/OGBOKA",
        "URUBI/EVBIEMWEN/IWEHEN",
        "UZEBU",
      ],
      name: "OREDO",
    },
    {
      wards: [
        "AIBIOKULA I",
        "AIBIOKULA II",
        "EVBOESI",
        "IGBANKE EAST",
        "IGBANKE WEST",
        "IYOBA",
        "UGBEKA",
        "UGBOKO",
        "UGU",
        "UKPATO",
        "URHONIGBE NORTH",
        "URHONIGBE SOUTH",
      ],
      name: "ORHIONMWON",
    },
    {
      wards: [
        "ADOLOR",
        "IGUOSHODIN",
        "ISIUWA",
        "ODUNA",
        "OFUNMWEGBE",
        "OGHEDE",
        "OKADA EAST",
        "OKADA WEST",
        "OKOKHUO",
        "OLUKU",
        "UHEN",
        "UHIERE",
        "UTOKA",
      ],
      name: "OVIA NORTH EAST",
    },
    {
      wards: [
        "IGUOBAZUWA EAST",
        "IGUOBAZUWA WEST",
        "NIKOROGHA",
        "OFUNAMA",
        "ORA",
        "SILUKO",
        "UDO",
        "UGBOGUI",
        "UMAZA",
        "USEN",
      ],
      name: "OVIA SOUTH WEST",
    },
    {
      wards: [
        "EMAI I",
        "EMAI II",
        "IGUE/IKAO",
        "IHIEVBE I",
        "IHIEVBE II",
        "IVBIADAOBI",
        "IVBIANION",
        "OTUO I",
        "OTUO II",
        "UOKHA/AKE",
        "WARRAKE",
      ],
      name: "OWAN EAST",
    },
    {
      wards: [
        "AVBIOSI",
        "EME-ORA/OKE",
        "ERUERE",
        "OKPUJE",
        "OZALLA",
        "SABONGIDA/ORA/OGBETURU",
        "SOBE",
        "UHONMORA",
        "UKHUSE -OSI",
        "UZEBBA I",
        "UZEBBA II",
      ],
      name: "OWAN WEST",
    },
    {
      wards: [
        "EGBEDE",
        "EHOR",
        "IGIEDUMA",
        "IRHUE",
        "ISI NORTH",
        "ISI SOUTH",
        "OHUAN",
        "UHI",
        "UMAGBAE NORTH",
        "UMAGBAE SOUTH",
      ],
      name: "UHUNMWODE",
    },
  ],
};

export const EDO = { states, SR };
