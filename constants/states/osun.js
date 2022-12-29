const SR = {
  name: "OSUN",
  email: "Osun@apcaims.com",
  password: "osun_apc_Yc4",
  phone: "08108850572",
  statecode: "OSUN",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "OSUN",
  state: "OSUN",
  lga: [
    {
      wards: [
        "AJEBANDELE",
        "AYEGUNLE",
        "ETI-ONI",
        "FAFORIJI",
        "FOREST RESERVE 1",
        "FOREST RESERVE II",
        "IGANGAN",
        "IPERINDO",
        "IPOLE",
        "IWARA",
      ],
      name: "ATAKUMOSA EAST",
    },
    {
      wards: [
        "IBODI",
        "IFELODUN",
        "IFEWARA I",
        "IFEWARA II",
        "ISA OBI",
        "ITA GUNMODI",
        "MUROKO",
        "OKE BODE",
        "OSU III",
        "OSU I",
        "OSU II",
      ],
      name: "ATAKUMOSA WEST",
    },
    {
      wards: [
        "ANLUGBUA",
        "ARAROMI-OWU",
        "BALOGUN",
        "GBONGAN RURAL",
        "IJEGBE/OKE-ESO/OKE-OWU IJUGBE",
        "LAGERE/AMOLA",
        "OBALUFON",
        "ODE-OMU RURAL",
        "OLUFI",
        "OTUN BALOGUN",
        "OTUN-OLUFI",
      ],
      name: "AYEDAADE",
    },
    {
      wards: [
        "ILEOGBO I",
        "ILEOGBO II",
        "ILEOGBO III",
        "ILEOGBO IV",
        "KUTA I",
        "KUTA II",
        "OKE-OSUN",
        "OLUPONNA 1",
        "OLUPONNA 1I",
        "OLUPONNA 1II",
      ],
      name: "AYEDIRE",
    },
    {
      wards: [
        "ERIPA",
        "GBELERU OBAALA I",
        "GBELERU OBAALA II",
        "IRESI I",
        "IRESI II",
        "OBALA ILORO",
        "OKE ODE OTAN",
        "OKE-IRUN",
        "OKE-OMI OTAN",
        "OKE-OTAN",
      ],
      name: "BOLUWADURO",
    },
    {
      wards: [
        "ADA I",
        "ADA II",
        "AGBA",
        "COLLEGE/EGBADA ROAD",
        "ISALE ASA IREE",
        "ISALE-OYO",
        "OJA - OBA",
        "OKE AREE",
        "OKE ESA/OKE OGI",
        "OLOTI IRAGBIJI",
        "ORORUWO",
      ],
      name: "BORIPE",
    },
    {
      wards: [
        "ABOGUNDE/SAGBA",
        "ALUSEKERE",
        "APASO",
        "BARA EJEMU",
        "ISIBO/BUARI-ISOLA",
        "JAGUN/JAGUN EDE",
        "OLABA/ATAPARA",
        "OLOGUN/AGBAAKIN",
        "OLUSOKUN",
        "SABO/AGBONGBE I",
        "SABO/AGBONGBE II",
      ],
      name: "EDE NORTH",
    },
    {
      wards: [
        "ALAJUE I",
        "ALAJUE II",
        "ASUNMO",
        "BABANLA/AGATE",
        "BABASANYA",
        "KUYE",
        "LOOGUN",
        "OLODAN",
        "OLOKI/AKODA",
        "SEKONA",
      ],
      name: "EDE SOUTH",
    },
    {
      wards: [
        "ARA I",
        "ARA II",
        "AWO/ABUDO",
        "IDO-OSUN",
        "IKOTUN",
        "IRA GBERI I",
        "IRA GBERI II",
        "IWOYE/IDOO/ORIGO",
        "OJO/ARO",
        "OKIN NI/OLORUNSOGO/OFATEDO",
      ],
      name: "EGBEDORE",
    },
    {
      wards: [
        "ELEJIGBO 'A'",
        "ELEJIGBO 'B'/OSOLO",
        "ELEJIGBO 'C'/MAPO",
        "ELEJIGBO 'D'/EJEMU",
        "ELEJIGBO/AYEGBOGBO",
        "IFEODAN 'A'/OWU-ILE",
        "IFEODAN 'B'/MASIFA",
        "ILAWO/ISOKO/ISUNDUNRIN",
        "INISA I/AATO/IGBON",
        "INISA II/AFAAKE/AYEGUNLE",
        "OLA/AYE/AGURODO",
      ],
      name: "EJIGBO",
    },
    {
      wards: [
        "AKARABATA",
        "ILARE 1",
        "ILARE 1I",
        "ILARE III",
        "ILARE IV",
        "IREMO II (ELEYELE)",
        "IREMO III",
        "IREMO IV",
        "IREMO V",
        "IREMO/AJEBANDELE",
        "MORE OJAJA",
      ],
      name: "IFE CENTRAL",
    },
    {
      wards: [
        "ILODE I",
        "ILODE II",
        "MODAKEKE II",
        "MODAKEKE III",
        "MODAKEKE I",
        "MORE",
        "OKEREWE I",
        "OKEREWE II",
        "OKEREWE III",
        "YEKEMI",
      ],
      name: "IFE EAST",
    },
    {
      wards: [
        "ASIPA/AKINLALU",
        "EDUNABON I",
        "EDUNABON II",
        "FAMIA",
        "IPETUMODU I",
        "IPETUMODU II",
        "MORO",
        "OYERE - II",
        "OYERE I",
        "YAKOYO",
      ],
      name: "IFE NORTH",
    },
    {
      wards: [
        "AARE",
        "ABIRI OGUDU",
        "AYE",
        "AYESAN",
        "IKIJA I",
        "IKIJA II",
        "KERE",
        "MEFOWORADE",
        "OKE OWENA",
        "OLODE",
        "OSI",
      ],
      name: "IFE SOUTH",
    },
    {
      wards: [
        "AKESIN",
        "ASAONI",
        "AWORO/OKE-ILA RURAL",
        "AYETORO",
        "BALOGUN",
        "CO-OPERATIVE",
        "ISINMI",
        "OBAALE",
        "OYI",
        "TEMIDIRE",
      ],
      name: "IFEDAYO",
    },
    {
      wards: [
        "AMOLA IKIRUN",
        "EESA IKIRUN",
        "EKOENDE/EKO AJALA",
        "IBA I",
        "IBA II",
        "IKIRUN RURAL",
        "ISALE/OKE AFO",
        "OBAGUN",
        "OKEBA IKIRUN",
        "OLONDE IKIRUN",
        "OWODE IKIRUN",
        "STATION ROAD, IKIRUN",
      ],
      name: "IFELODUN",
    },
    {
      wards: [
        "AJABA/EDEMOSI/ABA ORANGUN",
        "EJIGBO I",
        "EJIGBO II",
        "EJIGBO III",
        "EYINDI",
        "EYINDI/IPERIN",
        "IPERIN",
        "ISEDO I",
        "ISEDO II",
        "OKE EDE",
        "OKE OLA",
      ],
      name: "ILA",
    },
    {
      wards: [
        "BILADU",
        "BOLORUNDURO",
        "IFOSAN/OKE-ESO",
        "IJAMO",
        "ILERIN",
        "ILORO/ROYE",
        "IMO",
        "ISARE",
        "ITISIN/OGUDU",
        "OKESA",
        "UPPER & LOWER IJOKA",
      ],
      name: "ILESA EAST",
    },
    {
      wards: [
        "AYESO",
        "EREJA",
        "IKOTI/ARAROMI",
        "ILAJE",
        "ISIDA/ADETI",
        "ISOKUN",
        "ITAKOGUN",
        "LOWER EGBEDI",
        "OMOFE/IDASA",
        "UPPER AND LOWER IGBOGI",
      ],
      name: "ILESA WEST",
    },
    {
      wards: [
        "BARA 'A'",
        "BARA 'B'",
        "ELERIN 'A'",
        "ELERIN 'B'",
        "ELERIN 'C'",
        "ELERIN 'D'",
        "ELERIN 'E'",
        "OLOBU 'A'",
        "OLOBU 'C'",
        "OLOBU 'D'",
        "OLUBU 'B'",
      ],
      name: "IREPODUN",
    },
    {
      wards: [
        "IKIRE 'A'",
        "IKIRE 'B'",
        "IKIRE 'C'",
        "IKIRE 'D'",
        "IKIRE 'E'",
        "IKIRE 'F'",
        "IKIRE 'G'",
        "IKIRE 'H'",
        "IKIRE 'I'",
        "IKIRE 'J'",
        "IKIRE 'K'",
      ],
      name: "IREWOLE",
    },
    {
      wards: [
        "ALAPOMU I (ODO-OSUN)",
        "ALAPOMU II",
        "ASALU (MOGIMOGI)",
        "ASALU IKOYI",
        "AWALA I",
        "AWALA II",
        "IDOGUN WARD",
        "OLUKOYI (OJA-OSUN)",
        "OOSA ADIFA",
        "ORANRAN WARD",
        "OSA IKOYI (OLOKE)",
      ],
      name: "ISOKAN",
    },
    {
      wards: [
        "GIDIGBO I",
        "GIDIGBO II",
        "GIDIGBO III",
        "ISALE OBA I",
        "ISALE OBA II",
        "ISALE OBA III",
        "ISALE OBA IV",
        "MOLETE I",
        "MOLETE II",
        "MOLETE III",
        "OKE-ADAN I",
        "OKE-ADAN II",
        "OKE-ADAN III",
        "OKE-OBA I",
        "OKE-OBA II",
      ],
      name: "IWO",
    },
    {
      wards: [
        "EESUN/IDO-OKO",
        "ESA - ODO",
        "ESA-OKE",
        "IBOKUN (TOWNSHIP)",
        "ILAHUN/IKINYINWA",
        "ILARE",
        "ILASE/IDOMINASI",
        "IMESI-ILE",
        "IPETU-ILE/ADAOWODE",
        "OTAN-ILE",
      ],
      name: "OBOKUN",
    },
    {
      wards: [
        "ASI/ASABA",
        "BAALE",
        "EKOSIN/IYEKU",
        "ESA OTUN BAALE ODE",
        "FAJI/OPETE",
        "IGBAYE",
        "IJABE/ILA ODO",
        "JAGUN OSI BALE ODE",
        "OBA/OJOMU",
        "OKUA/EKUSA",
        "OLOYAN ELEMOSHO / ESA",
        "OLUKOTUN",
        "OLUNISA",
        "ORE/AGBEYE",
        "OSOLO/OPARIN/OLA",
      ],
      name: "ODO-OTIN",
    },
    {
      wards: [
        "AJAGBA/IWO OKE",
        "ASA AJAGUNLASE",
        "ASAMU/ILEMOWU",
        "BODE-OSI",
        "IKIRE ILE/IWARA",
        "ISERO/IKONIFIN",
        "OBAMORO/ILE OGO",
        "OGBAAGBA I",
        "OGBAAGBA II",
        "TELEMU",
      ],
      name: "OLA-OLUWA",
    },
    {
      wards: [
        "AGOWANDE",
        "AKOGUN",
        "ATELEWO",
        "AYETORO",
        "BALOGUN",
        "ILIE",
        "OBA OKE",
        "OBA-ILE",
        "OWODE I",
        "OWODE II",
        "OWOOPE",
      ],
      name: "OLORUNDA",
    },
    {
      wards: [
        "APOTI DAGBAJA",
        "ERIN-IJESA",
        "ERIN-OKE",
        "ERINMO/IWARAJA",
        "IJEBU-JESA",
        "IJEDA ILOKO",
        "IJEJI ARAKEJI/OWENA",
        "IKEJI-ILE",
        "IPETU IJESA I",
        "IPETU-IJESA II",
        "IRA",
        "IWOYE",
      ],
      name: "ORIADE",
    },
    {
      wards: [
        "OLUFON OROLU 'J'",
        "OLUFON OROLU 'A'",
        "OLUFON OROLU 'B'",
        "OLUFON OROLU 'I'",
        "OLUFON OROLU 'C'",
        "OLUFON OROLU 'D'",
        "OLUFON OROLU 'E'",
        "OLUFON OROLU 'F'",
        "OLUFON OROLU 'G'",
        "OLUFON OROLU 'H'",
      ],
      name: "OROLU",
    },
    {
      wards: [
        "ALAGBA",
        "ARE-AGO",
        "ATAOJA 'A'",
        "ATAOJA 'B'",
        "ATAOJA 'C'",
        "ATAOJA 'D'",
        "ATAOJA 'E'",
        "BABA KEKERE",
        "EKERIN",
        "EKETA",
        "JAGUN 'A'",
        "JAGUN B'",
        "OTUN BALOGUN 'A'",
        "OTUN HAGUN B",
        "OTUN JAGUN 'A'",
      ],
      name: "OSOGBO",
    },
  ],
};

export const OSUN = { states, SR };
