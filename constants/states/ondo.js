const SR = {
  name: "ONDO",
  email: "Ondo@apcaims.com",
  password: "ondo_ins31",
  phone: "08108850572",
  statecode: "ONDO",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "ONDO",
  state: "ONDO",
  lga: [
    {
      wards: [
        "EDO",
        "EKAN",
        "IKADO I",
        "IKADO II",
        "ILEPA I",
        "ILEPA II",
        "ISOWOPO I",
        "ISOWOPO II",
        "IYOMETA I",
        "IYOMETA II",
        "OORUN I",
        "OORUN II",
        "OYINMO",
      ],
      name: "AKOKO NORTH EAST",
    },
    {
      wards: [
        "AJOWA/IGASI/ERITI/GEDEGEDE",
        "ARIGIDI II",
        "ARIGIDI/IYE I",
        "ERUSU/KARAMU/IBARAMU",
        "ESE/AFIN",
        "ODO-IRUN/OYINMO",
        "OGBAGI",
        "OKE-IRUN/SURULERE",
        "OKEAGBE",
        "OYIN/OGE",
      ],
      name: "AKOKO NORTH WEST",
    },
    {
      wards: [
        "EPINMI I",
        "EPINMI II",
        "IFIRA",
        "IPE I",
        "IPE II",
        "IPESI",
        "ISUA I",
        "ISUA II",
        "ISUA III",
        "ISUA IV",
        "SOSAN",
      ],
      name: "AKOKO SOUTH EAST",
    },
    {
      wards: [
        "AKUNGBA I",
        "AKUNGBA II",
        "IKUN",
        "OBA I",
        "OBA II",
        "OKA I IBAKA / SABO",
        "OKA II A IKANMU",
        "OKA II B OKIA/KOROWA/SIMERIN/UBA",
        "OKA III A AGBA",
        "OKA III B OWASE /IKESE/IWONRIN/EBINRIN/IDORIN",
        "OKA IV/OWAKE/EBO/AYEGUNLE",
        "OKA V A OWALUSIN/AYEPE",
        "OKA V B OKA ODO/OKELA/BOLORUNDURO",
        "SUPARE I",
        "SUPARE II",
      ],
      name: "AKOKO SOUTH WEST",
    },
    {
      wards: [
        "AGAMO/OKE-OORE/AKOMOWA",
        "AYEDE/OGBESE",
        "AYETORO",
        "IGBATORO",
        "IGOBA/ISINIGBO",
        "ILUABO/ELEYEWO/BOLORUNDURO",
        "ISIMIJA/IRADO",
        "MOFERERE",
        "OBA-ILE",
        "ODO-OJA/IJIGBO",
        "OKE IJU",
        "OKE-AFA/OWODE",
      ],
      name: "AKURE NORTH",
    },
    {
      wards: [
        "APONMU",
        "GBOGI/ISIKAN I",
        "GBOGI/ISIKAN II",
        "IJOMU/OBANLA",
        "LISA",
        "ODA",
        "ODOPETU",
        "OKE ARO/URO I",
        "OKE ARO/URO II",
        "OSHODI/ISOLO",
        "OWODE/IMUAGUN",
      ],
      name: "AKURE SOUTH",
    },
    {
      wards: [
        "APOI I",
        "APOI II",
        "APOI III",
        "APOI IV",
        "APOI V",
        "AROGBO I",
        "AROGBO II",
        "AROGBO III",
        "UKPARAMA I",
        "UKPARAMA II",
      ],
      name: "ESE-ODO",
    },
    {
      wards: [
        "ALA-ELEFOSAN",
        "ALADE/ATOSIN",
        "IDALE-LEMIKAN",
        "IDALE-LOGBOSERE",
        "IJOMU/ISURIN",
        "IROWO",
        "ISALU EHINPETI",
        "ISALU JIGBOKIN",
        "OFOSU/ONISERE",
        "OWENA/APONMULONA",
      ],
      name: "IDANRE",
    },
    {
      wards: [
        "ERO/IBUJI/MARIWO",
        "IGBAKA-OKE I",
        "IGBAKA-OKE II",
        "IJARE 1",
        "IJARE 11",
        "ILARA 1",
        "ILARA 11",
        "IPOGUN/IBULE",
        "ISARUN/ ERIGI",
        "OBO/IKOTA/OLO-GBO",
      ],
      name: "IFEDORE",
    },
    {
      wards: [
        "AHERI",
        "ETIKAN",
        "MAHIN 1",
        "MAHIN 11",
        "MAHIN 111",
        "MAHIN 1V",
        "UGBO 1",
        "UGBO 11",
        "UGBO 111",
        "UGBO 1V",
        "UGBO V",
        "UGBO V1",
      ],
      name: "ILAJE",
    },
    {
      wards: [
        "ILEOLUJI 1",
        "ILEOLUJI 11",
        "ILEOLUJI 1V",
        "ILEOLUJI III",
        "ILEOLUJI V",
        "ILEOLUJI VI",
        "ILEOLUJI VII",
        "OKE-IGBO 1",
        "OKE-IGBO 11",
        "OKE-IGBO 111",
        "OKE-IGBO 1V",
      ],
      name: "ILEOLUJI/OKEIGBO",
    },
    {
      wards: [
        "AJAGBA 1",
        "AJAGBA 11",
        "AKOTOGBO 1",
        "AKOTOGBO 11",
        "IRELE 1",
        "IRELE 11",
        "IRELE 1V",
        "IRELE III",
        "IRELE V",
        "IYANSAN/OMI",
      ],
      name: "IRELE",
    },
    {
      wards: [
        "AGBABU",
        "AGO-ALAYE",
        "AJUE",
        "ARAROMI OBU",
        "AYESAN",
        "EBIJAN",
        "KOSERU",
        "ODIGBO",
        "ONIPARAGA",
        "ORE 1",
        "ORE 11",
      ],
      name: "ODIGBO",
    },
    {
      wards: [
        "AYE 11",
        "AYEKA/IGBODIGO",
        "ERINJE",
        "IGBOTAKO 1",
        "IGBOTAKO 11",
        "IJU-ODO/EREKITI",
        "IKOYA/OLOTO",
        "ILUTITUN 1",
        "ILUTITUN 111",
        "ILUTITUN II",
        "ODE AYE 1",
        "OKITIPUPA 1",
        "OKITIPUPA 11",
      ],
      name: "OKITIPUPA",
    },
    {
      wards: [
        "ASANTAN OJA",
        "ATERU/OTASAN/IGBA",
        "BOLORUNDURO 1",
        "EPE",
        "FAGBO",
        "OBADA",
        "OBOTO",
        "ORISUNMIBARE",
        "OWENA BRIDGE",
        "TEPO",
      ],
      name: "ONDO EAST",
    },
    {
      wards: [
        "ENUOWA/OBALALU",
        "GBAGHENGHA/GBONGBO/AJAGBA ALAFIA",
        "IFORE/ODOSIDA/LORO",
        "ILUNLA/BAGBE/ODOWO I",
        "ILUNLA/BAGBE/ODOWO II",
        "LITAYE/OBUNKEKERE/IGBINDO",
        "LODASA/IPARUKU/LIJOKA",
        "ODOJOMU/ERINKETA/LEGIRI",
        "OKE-OTUNBA/OKE-DIBA/SOKOTI",
        "OKEAGUNLA OKEROWO/OKEKUTA",
        "OKELISA OKEDOKO/OGBODU",
        "ORISUNMIBARE/ARAROMI",
      ],
      name: "ONDO WEST",
    },
    {
      wards: [
        "AFO",
        "IDOANI 1",
        "IDOANI 11",
        "IDOGUN",
        "IFON 1",
        "IFON 11",
        "IJAGBA",
        "IKARO/ELEGBEKA",
        "IMERI",
        "IMORU/ARIMOGIJA",
        "OKELUSE",
        "UTE",
      ],
      name: "OSE",
    },
    {
      wards: [
        "EHINOGBE",
        "IGBOROKO 1",
        "IGBOROKO 11",
        "IJEBU 1",
        "IJEBU 11",
        "ILORO",
        "IPELE",
        "ISAIPEN",
        "ISUADA/IPENMEN/IDASAN/OBASOOTO",
        "IYARE",
        "USO/EMURE ILE",
      ],
      name: "OWO",
    },
  ],
};

export const ONDO = { states, SR };
