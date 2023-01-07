const SR = {
  name: "BORNO",
  email: "Borno@apcaims.com",
  password: "borno_pp3",
  phone: "08108850572",
  statecode: "BORNO",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  state: "BORNO",
  statecode: "BORNO",
  lga: [
    {
      wards: [
        "AREGE",
        "BANOWA",
        "FUGUWA",
        "JABULLAM",
        "KUDOKURGU",
        "MALAM KAUNARI",
        "MALLAMFATORI KESSA",
        "YAU",
        "YAWA KURA",
        "YITUWA",
      ],
      name: "ABADAM",
    },
    {
      wards: [
        "ASKIRA EAST",
        "CHUL / RUMIRGO",
        "DILLE / HUYUM",
        "HUSARA / TAMPUL",
        "KOPA / MULTHAFU",
        "LASSA",
        "MUSSA",
        "NGOHI",
        "NGULDE",
        "UBA",
        "UDA / UVU",
        "WAMDEO / GIWI",
        "ZADAWA / HAUSARI",
      ],
      name: "ASKIRA/UBAH",
    },
    {
      wards: [
        "ANDARA / AJIRI /WULBA",
        "BUDUWA / BULA CHIRABE",
        "DIPCHARI / JERE / DAR-JAMAL / KOTEMBE",
        "GULUMBA / JUKKURI / BATRA",
        "KASUGULA",
        "KUMSHE /NDUGUNO",
        "LAWANTI / MALAM / MASTARI / ABBARAM",
        "MARKA / MALGE / AMCHAKA",
        "MBULIYA / GONIRI / SIRAJA",
        "SABSABWA / SOYE/ BULONGU",
        "SHEHURI / HAUSARI / MAIRI",
        "WULBARI/NDINE/CHACHILE",
        "YABIRI KURA/YABIRI GANA/CHONGOLO",
        "ZANGERI/KASH  KASH",
      ],
      name: "BAMA",
    },
    {
      wards: [
        "BALBAYA",
        "BRIYEL",
        "FIKAYEL",
        "GAMADADI",
        "JARA DALI",
        "JARA GOL",
        "LIMANTI",
        "TELI",
        "WUYO",
        "ZARA",
      ],
      name: "BAYO",
    },
    {
      wards: [
        "BURATAI",
        "DADIN KOWA",
        "DUGJA",
        "GARUBULA",
        "GUR",
        "KENKEN",
        "MANDARA GIRAU",
        "MIRINGA",
        "SULUMTHLA",
        "YAWI",
        "ZARAWUYAKU",
      ],
      name: "BIU",
    },
    {
      wards: [
        "CHIBOK GARU",
        "CHIBOK LIKAMA",
        "CHIBOK WUNTAKU",
        "GATAMARWA",
        "KAUTIKARI",
        "KORONGILIM",
        "KUBURMBULA",
        "MBALALA",
        "MBOA KURA",
        "PEMI",
        "SHIKARKIR",
      ],
      name: "CHIBOK",
    },
    {
      wards: [
        "AJIGN (A)",
        "AJIGN (B)",
        "AZUR/MULTE/FORFOR",
        "BEGO/YERWA/NGURNA",
        "DAMBOA",
        "GUMSURI/MISAKURBUDU",
        "KAFA / MAFI",
        "MULGWAI / KOPCHI",
        "NGUDA / WUYARAM",
        "WAWA / KOREDE",
      ],
      name: "DAMBOA",
    },
    {
      wards: [
        "BOBOSHE",
        "DIKWA",
        "GAJIBO",
        "MAGARTA / SHEFFRI",
        "MALLAM MAJA",
        "MUDU / KAZA",
        "MULIYE / JEMURI",
        "NGUDORAM",
        "SOGOMA / AFUYE",
        "UFAYE / GUJILE",
      ],
      name: "DIKWA",
    },
    {
      wards: [
        "ARDIMINI",
        "DABIRA",
        "FELO",
        "GAMOWO",
        "GAZABURE",
        "GUBIO TOWN  I",
        "GUBIO TOWN II",
        "KINGOWA",
        "NGETRA",
        "ZOWO",
      ],
      name: "GUBIO",
    },
    {
      wards: [
        "ADUWA",
        "GUDUMBALI EAST",
        "GUDUMBALI WEST",
        "GUWORAM",
        "GUZAMALA EAST",
        "GUZAMALA WEST",
        "KINGARWA",
        "MAIRARI",
        "MODURI",
        "WAMIRI",
      ],
      name: "GUZAMALA",
    },
    {
      wards: [
        "ASHIGASHIYA",
        "BITA / IZGE",
        "DURE / WALA / WARABE",
        "GAVVA / AGAPALWA",
        "GUDUF NAGADIYO",
        "GWOZA TOWN GADAMAYO",
        "GWOZA WAKANE / BULABULIN",
        "HAMBAGDA/ LIMAN KARA/ NEW SETTLEMENT",
        "JOHODE/CHIKIDE/KUGHUM",
        "KIRAWA/JIMINI",
        "KURANA BASSA/NGOSHE - SAMA'A",
        "NGOSHE",
        "PULKA/BOKKO",
      ],
      name: "GWOZA",
    },
    {
      wards: [
        "BILINGWI",
        "DZAR/ VINADUM/ BIRNI/ DLANDI",
        "GWANZANG  PUSDA",
        "HIZHI",
        "KIDA",
        "KWAJAFFA/HANG",
        "KWAYA-BUR/TANGA RUMTA",
        "MARAMA/KIDANG",
        "PAMA/WHITAMBAYA",
        "PUBA/VIDAU/LOKOJA",
        "SAKWA/HEMA",
        "SHAFFA",
      ],
      name: "HAWUL",
    },
    {
      wards: [
        "ALAU",
        "BALE GALTIMARI",
        "DALA LAWANTI",
        "DUSUMAN",
        "GOMARI",
        "GONGULONG",
        "MAIMUSARI",
        "MAIRI",
        "MASHAMARI",
        "NGUDAA/ADDAMARI",
        "OLD MAIDUGURI",
        "TUBA",
      ],
      name: "JERE",
    },
    {
      wards: [
        "AFA/DIG/MAUDORI",
        "BENISHEIKH",
        "BORGOZO",
        "DOGOMA / JALORI",
        "DONGO",
        "GALANGI",
        "GUWO",
        "KARAGAWARU",
        "MAINOK",
        "MARGUBA",
        "NGAMDU",
        "SHETTIMARI",
        "TOBOLO",
        "WAJIRO / BURGUMMA",
        "WASSARAM",
      ],
      name: "KAGA",
    },
    {
      wards: [
        "JARAWA/SANGAYA",
        "JILBE  'A'",
        "JILBE 'B'/KOMA KAUDI",
        "KALA",
        "KUMAGA",
        "MADA",
        "MOHOLO",
        "RANN  'A'",
        "RANN 'B''/DAIMA",
        "SIGAL/KARCHE",
      ],
      name: "KALA BALGE",
    },
    {
      wards: [
        "AUNO / CHABBOL",
        "DALORI / WANORI",
        "DAWA EAST / MALARI / KANGAMARI",
        "JEWU / LAMBOA",
        "KAWURI",
        "KELUMIRI / NGALBI AMARI / YALE",
        "KONDUGA",
        "MAIRAMRI / YELERI / BAZAMRI",
        "MASBA / DALWA WEST",
        "NYALERI/SANDIA/YEJIWA",
        "SOJIRI/ NGURO - NGURO",
      ],
      name: "KONDUGA",
    },
    {
      wards: [
        "ALAGARNO",
        "BAGA",
        "BUNDUR",
        "DOGOSHI",
        "DORO / DUGURI",
        "KAUWA",
        "KEKENO",
        "KUKAWA",
        "MODUARI / BARWARI",
        "YOYO",
      ],
      name: "KUKAWA",
    },
    {
      wards: [
        "GONDI",
        "GUSI / BILLA",
        "GUWAL",
        "KUBUKU",
        "KURBA",
        "KWAYA KUSAR",
        "PETA",
        "WADA",
        "WAWA",
        "YIMIRTHALANG",
      ],
      name: "KWAYA / KUSAR",
    },
    {
      wards: [
        "ABBARI",
        "ANADUA",
        "GAWA",
        "KOSHEBE",
        "LAJE",
        "LIMANTI",
        "LOSKURI",
        "MA'AFA",
        "MAFA",
        "MASU",
        "MUJIGINE",
        "TAMSU NGAMDUA",
      ],
      name: "MAFA",
    },
    {
      wards: [
        "ARDO RAM",
        "AYI / YASKU",
        "BORNO YESU",
        "FURRAM",
        "GAJI GANNA  I",
        "GAJI GANNA  II",
        "HOYO / CHIN GOWA",
        "KALIZORAM / BANORAM",
        "KARERAM",
        "KUBTI",
        "MAGUMERI",
        "NGAMMA",
        "NGUBALA",
      ],
      name: "MAGUMERI",
    },
    {
      wards: [
        "BOLORI  I",
        "BOLORI  II",
        "BULABLIN",
        "FEZZAN",
        "GAMBORU LIBERTY",
        "GWANGE  I",
        "GWANGE  II",
        "GWANGE  III",
        "HAUSARI/ZANGO",
        "LAMISULA/JABBA MARI",
        "LIMANTI",
        "MAFONI",
        "MAISANDARI",
        "SHEHURI  NORTH",
        "SHEHURI SOUTH",
      ],
      name: "MAIDUGURI M. C.",
    },
    {
      wards: [
        "ALA",
        "ALLA  LAWANTI",
        "BORSORI",
        "GUMNA",
        "KABULAWA",
        "KIRENOWA",
        "KULLI",
        "MARTE",
        "MAWULLI",
        "MUSUNE",
        "NGELEIWA",
        "NJINE",
        "ZAGA",
      ],
      name: "MARTE",
    },
    {
      wards: [
        "ASAGA",
        "BOGUM",
        "CHAMBA",
        "DAMASAK",
        "DUJI",
        "GASHAGAR",
        "KARETO",
        "LAYI",
        "ZANNA UMORTI",
        "ZARI",
      ],
      name: "MOBBAR",
    },
    {
      wards: [
        "DAMAKULI",
        "KAGURAM",
        "KUMALIA",
        "MANDALA",
        "MINTAR",
        "MOFIO",
        "MONGUNO",
        "NGURNO",
        "SURE",
        "WULO",
        "YELE",
        "ZULUM",
      ],
      name: "MONGUNO",
    },
    {
      wards: [
        "FUYE",
        "GAMBORU 'B'",
        "GAMBORU 'C'",
        "LOGUMANE",
        "NDUFU",
        "NGALA WARD",
        "OLD GAMBORU 'A'",
        "SAGIR",
        "TUNOKALIA",
        "WARSHELE",
        "WULGO",
        "WURGE",
      ],
      name: "NGALA",
    },
    {
      wards: [
        "ALARGE",
        "BADU",
        "DAMARAM",
        "GADAI",
        "GAJIRAM",
        "JIGALTA",
        "KUDA",
        "KURNAWA",
        "MAIWA",
        "MIYE",
        "SABSABUWA",
        "SUGUNDURE",
      ],
      name: "NGANZAI",
    },
    {
      wards: [
        "BARGU / BURASHIKA",
        "BUMA",
        "GASI / SALIFAWA",
        "GORA",
        "GWALASHO",
        "GWASKARA",
        "KOMBO",
        "KUBO",
        "KWABA",
        "SHANI",
        "WALAMA",
      ],
      name: "SHANI",
    },
  ],
};

export const BORNO = { states, SR };
