const electionTypes = [
  { title: "PRESIDENTIAL", code: "PRE" },
  { title: "GUBERNATORIAL", code: "GUB" },
  { title: "SENATORIAL", code: "SEN" },
  { title: "HOUSE OF REP.", code: "HOU" },
  { title: "STATE HOUSE OF ASSEMBLY", code: "ASS" },
];

const agentTypes = [
  "PRESIDENTIAL",
  "STATE CONSTITUENCY",
  "LOCAL GOVERNMENT",
  "WARD",
  "POLLING UNIT",
];

const bankNames = [
  "GTB",
  "ZENITH",
  "UBA",
  "ECOBANK",
  "KEYSTONE",
  "JAIZ",
  "GLOBUS",
  "KUDA",
  "ACCESS",
  "DIAMOND (ACCESS)",
];

export const agentParams = { electionTypes, agentTypes, bankNames };

const SENATORIAL_DISTRICT = {};
