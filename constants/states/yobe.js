const SR = {
  name: "YOBE",
  email: "Yobe@apcaims.com",
  password: "axd96",
  phone: "08108850572",
  statecode: "YOBE",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "YOBE",
  state: "YOBE",
  lga: [
    {
      wards: [
        "DAGONA",
        "GWIO-KURA",
        "KATUZU",
        "LAWAN AUDU/LAWAN AL - WALI",
        "LAWAN FANNAMI",
        "LAWAN MUSA",
        "SARKIN HAUSAWA",
        "TAGALI/SUGUM",
        "USUR/DAWAYO",
        "ZANGON MUSA/ZANGO UMARU",
      ],
      name: "BADE",
    },
    {
      wards: [
        "BAYAMARI",
        "DAMNAWA/JULURI",
        "DANANI",
        "DAPCHI",
        "GARUN DOLE / GARIN ALKALI",
        "GUBA",
        "GUJI / METALARI",
        "KALIYARI",
        "KURNAWA",
        "MASABA",
      ],
      name: "BURSARI",
    },
    {
      wards: [
        "BINDIGARI/FAWARI",
        "DAMAKASU",
        "DAMATURU CENTRAL",
        "GABIR/MADURI",
        "KALALLAWA/GABAI",
        "KUKARETA/WARSALA",
        "MAISANDARI/WAZIRI IBRAHIM ESTATE",
        "MURFA KALAM",
        "NAYINAWA",
        "NJIWAJI/GWANGE",
        "SASAWA/KABARU",
      ],
      name: "DAMATURU",
    },
    {
      wards: [
        "DAYA/CHANA",
        "FIKA/ANZE",
        "GADAKA/SHEMBIRE",
        "GUDI / DOZI / GODO WOLI",
        "JANGA / BOZA / FA. SAWA / T. NANAI",
        "MUBI / FUSAMI / GARIN WAYO",
        "NGALDA/DUMBULWA",
        "SHOYE/GARIN ABA",
        "TURMI / MALURI",
        "ZANGAYA/MAZAWAUN",
      ],
      name: "FIKA",
    },
    {
      wards: [
        "ABAKIRE / NGENLSHENGELE / SHAMKA",
        "ALAGARNO",
        "BORNO KIJI/NGARHO/BEBBENDE",
        "DAMAGUM TOWN",
        "DAURA/BULANYIWA/DUBBUL/BAUWA",
        "DOGON KUKA/GISHIWARI/GUNUNU",
        "FUNE/NGELZARMA/MILBIYAR/LAWAN KALAM",
        "GABA TASHA/AIGADA/DUMBULWA",
        "GUDUGURKA/MARMAR I",
        "JAJERE/BANELLEWA/BABBARE",
        "KAYERI",
        "KOLLERE/KAFAJE",
        "MASHIO",
      ],
      name: "FUNE",
    },
    {
      wards: [
        "ASHEIKRI",
        "BALLE/GALLABA/MELERI",
        "DAMAKARWA/KUSUR",
        "DEJINA/FUKURTI",
        "FUTCHIMIRAM",
        "GUMSA",
        "HAUSARI",
        "KAWURI",
        "MA'ANNA/DAGAMBI",
        "SHAME KURA / DILAWA",
        "ZURGU NGILEWA / BORKO",
      ],
      name: "GEIDAM",
    },
    {
      wards: [
        "BUNIGARI/LAWANTI",
        "BUNIYADI NORTH / SOUTH",
        "DADINGEL",
        "GONIRI",
        "GOTALA/GOTUMBA",
        "GUJBA",
        "MALLAM DUNARI",
        "MUTAI",
        "NGURBUWA",
        "WAGIR",
      ],
      name: "GUJBA",
    },
    {
      wards: [
        "BARA",
        "BORNO KIJI/TETTEBA",
        "BULARAFA",
        "BUMSA",
        "DOKSHI",
        "GABAI",
        "GAGURE",
        "GARIN TUWO",
        "GULANI",
        "KUSHIMAGA",
        "NJIBULWA",
        "RUHU",
      ],
      name: "GULANI",
    },
    {
      wards: [
        "BUDUWA / SAMINAKA",
        "DUMBARI",
        "GIDGID / BAYAM",
        "GORGORAM",
        "JABA",
        "JAKUSKO",
        "JAWUR/KATAMMA",
        "LAFIYA LOI-LOI",
        "MUGURAM",
        "ZABUDUM / DACHIA",
      ],
      name: "JAKUSKO",
    },
    {
      wards: [
        "BUKARTI",
        "FAJIGANARI",
        "GARIN GAWO",
        "GASMA",
        "JAJI MAJI",
        "KARASUWA GALU",
        "KARAUSWA GARU GUNA",
        "WACHAKAL",
        "WARO",
        "YAJIRI",
      ],
      name: "KARASAWA",
    },
    {
      wards: [
        "BOGO",
        "DAMAI",
        "DOLE",
        "FALIMARAM",
        "KOM-KOMMA",
        "KUKA-YASKU",
        "LAMISU",
        "MACHINA-KWARI",
        "MASKANDARE",
        "TAGANAMA",
      ],
      name: "MACHINA",
    },
    {
      wards: [
        "CHILARIYE",
        "DADISO / CHUKURIWA",
        "DAWASA/G.BABA",
        "DAZIGAU",
        "DEGUBI",
        "KUKURI/CHIROMARI",
        "LANGAWA / DARIN",
        "NANGERE",
        "PAKARAU KARE-KARE/ PAKARAU FULANI",
        "TIKAU",
        "WATINANI",
      ],
      name: "NANGERE",
    },
    {
      wards: [
        "BULABULIN",
        "BULANGUWA",
        "DABULE",
        "DUMSAI/DOGON-KUKA",
        "GARBI/BAMBORI",
        "HAUSARI",
        "KANURI",
        "MAJA-KURA",
        "MIRBA-KABIR/MIRBA SAGIR",
        "NGLAIWA",
      ],
      name: "NGURU",
    },
    {
      wards: [
        "BARE-BARE/BAUYA/LALAI DUMBULWA",
        "BOLEWA 'A'",
        "BOLEWA 'B'",
        "DANCHUWA/BULA",
        "DOGO NINI",
        "DOGO TEBO",
        "HAUSAWA",
        "MAMUDO",
        "NGOJIN/ALARABA",
        "YERIMARAM/GARIN DAYE/BADEJO/NAHUTA",
      ],
      name: "POTISKUM",
    },
    {
      wards: [
        "BABANGIDA",
        "BARKAMI / BULTURI",
        "BIRIRI/CHUROKUSKO",
        "JUMBAM",
        "KOKA/SUNGUL",
        "KORIYEL",
        "LANTAIWA",
        "MAFA",
        "MANDADAWA",
        "SHEKAU",
      ],
      name: "TARMUWA",
    },
    {
      wards: [
        "BULTUWA/MAR/YARO",
        "DARATOSHIA",
        "DEGALTURA/NGAMZAI",
        "DEKWA",
        "DILALA/KALGI",
        "MAIRARI",
        "MOZOGUN/KUJARI",
        "NGIRABO",
        "WADI/KAFIYA",
        "ZAJIBIRI / DUMBAL",
       ],
        name: "YUNUSARI"
    },
    {
      wards: [
        "ALANJIRORI",
        "GUMSHI",
        "GUYA",
        "JEBUWA",
        "KAJIMARAM/SUMBAR",
        "KASKA/TULOTULOWA",
        "KUMAGANNAM",
        "MAI-MALARI",
        "MAYORI",
        "YUSUFARI",
      ],
      name: "YUSUFARI",
    },
  ],
};

export const YOBE = { states, SR };
