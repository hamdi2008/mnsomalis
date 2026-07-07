// mnsomalis.com — all site data lives here.
// Rule: every stat has a value, year, source name, and source URL. No exceptions.

export type Stat = {
  value: string;
  label: string;
  detail?: string;
  source: string;
  sourceUrl: string;
  year: string;
};

export const SITE = {
  name: "MN Somalis",
  domain: "mnsomalis.com",
  tagline: "Who are Somali Minnesotans? The facts, from public data.",
  description:
    "A reference site on Minnesota's Somali community, built entirely from public data — U.S. Census Bureau, Minnesota state agencies, and published research. Every number cited.",
};

// ---------- HOMEPAGE HEADLINE STATS ----------
export const headlineStats: Stat[] = [
  {
    value: "~108,500",
    label: "Somali Minnesotans",
    detail: "The largest Somali community in the United States",
    source: "U.S. Census Bureau, ACS 2024 1-Year",
    sourceUrl: "https://data.census.gov/table?t=1325&g=040XX00US27",
    year: "2024",
  },
  {
    value: "91%",
    label: "are U.S. citizens",
    detail: "Non-citizens fell from 76% in 2001 to 9% in 2023",
    source: "ACS/IPUMS via Minnesota Reformer",
    sourceUrl:
      "https://minnesotareformer.com/briefs/most-somali-people-in-america-and-minnesota-are-citizens/",
    year: "2023",
  },
  {
    value: "~70%",
    label: "labor force participation",
    detail: "Higher than the statewide average",
    source: "U.S. Census Bureau via Star Tribune",
    sourceUrl:
      "https://www.startribune.com/trump-administration-immigration-policy-ice-raids/601542918",
    year: "2025",
  },
  {
    value: "~$8B",
    label: "estimated annual economic impact",
    detail: "IMPLAN economic model, Dr. Bruce Corrie, Concordia University",
    source: "Empowering Strategies / ALANA Brain Trust",
    sourceUrl:
      "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
    year: "2024",
  },
  {
    value: "47%",
    label: "under age 18",
    detail: "One of the youngest communities in Minnesota",
    source: "U.S. Census Bureau, ACS 2024 1-Year",
    sourceUrl:
      "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
    year: "2024",
  },
  {
    value: "30+",
    label: "years in Minnesota",
    detail: "First Somali refugees arrived in 1992",
    source: "Minnesota Historical Society",
    sourceUrl:
      "https://www.mnhs.org/mnopedia/search/index/somali-and-somali-american-experiences-minnesota",
    year: "1992",
  },
];

// ---------- POPULATION ----------
export const populationMeasures = [
  {
    measure: "ACS 2024 1-Year — “Somali alone or in any combination”",
    value: "≈108,500",
    note: "Broadest official measure. Recommended by the Minnesota State Demographer because many respondents skip the ancestry question.",
    source: "U.S. Census Bureau",
    sourceUrl: "https://data.census.gov/table?t=1325&g=040XX00US27",
    year: "2024",
    pct: 100,
  },
  {
    measure: "2020 Decennial Census",
    value: "≈91,000",
    note: "Full-count census, now six years old.",
    source: "U.S. Census Bureau via Minnesota Reformer",
    sourceUrl:
      "https://minnesotareformer.com/briefs/most-somali-people-in-america-and-minnesota-are-citizens/",
    year: "2020",
    pct: 84,
  },
  {
    measure: "ACS 5-Year ancestry tabulation",
    value: "≈61,400",
    note: "Narrower measure; undercounts because the ancestry question is often skipped.",
    source: "U.S. Census Bureau ACS 5-Year (2019–2023)",
    sourceUrl:
      "https://www.neilsberg.com/insights/lists/somali-population-in-minnesota-by-county/",
    year: "2019–23",
    pct: 57,
  },
];

export const populationStats: Stat[] = [
  {
    value: "#1",
    label: "Minnesota has the largest Somali population in the U.S.",
    detail:
      "Roughly 40% of the ~259,000 people of Somali descent in America live in Minnesota",
    source: "U.S. Census Bureau, ACS 2024 via Minnesota Reformer",
    sourceUrl:
      "https://minnesotareformer.com/briefs/most-somali-people-in-america-and-minnesota-are-citizens/",
    year: "2024",
  },
  {
    value: "~77%",
    label: "live in the Twin Cities metro",
    detail:
      "With significant communities in St. Cloud, Rochester, Willmar, Marshall, and Faribault",
    source: "Minnesota Chamber Foundation",
    sourceUrl:
      "https://www.mnchamber.com/sites/default/files/The%20Economic%20Contributions%20of%20Immigrants%20in%20Minnesota%203.23.21.pdf",
    year: "2021",
  },
  {
    value: "58%",
    label: "born in the United States",
    detail: "Of the foreign-born, roughly 87% are naturalized citizens",
    source: "U.S. Census Bureau ACS via KTTC",
    sourceUrl:
      "https://www.kttc.com/2025/12/04/by-numbers-minnesotas-somali-population-according-census-data/",
    year: "2024",
  },
  {
    value: "~22",
    label: "median age",
    detail: "Compared to about 38.5 for Minnesota overall",
    source: "U.S. Census Bureau ACS",
    sourceUrl:
      "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
    year: "2024",
  },
];

export const citizenshipTrend = {
  title: "From newcomers to citizens",
  note: "Share of Somali Minnesotans who are non-citizens",
  source: "ACS/IPUMS via Minnesota Reformer",
  sourceUrl:
    "https://minnesotareformer.com/briefs/most-somali-people-in-america-and-minnesota-are-citizens/",
  points: [
    { year: "2001", value: 76, label: "76%" },
    { year: "2023", value: 9, label: "9%" },
  ],
};

export const countyData = [
  { name: "Hennepin County", value: "≈28,000" },
  { name: "Ramsey County", value: "≈7,850" },
  { name: "Dakota County", value: "≈4,900" },
];

// ---------- ECONOMY ----------
export const economyStats: Stat[] = [
  {
    value: "~$8B",
    label: "estimated annual economic impact",
    detail:
      "Latest IMPLAN model run: $8.6B in output, supporting roughly 45,000 jobs statewide",
    source: "Dr. Bruce Corrie, Empowering Strategies",
    sourceUrl:
      "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
    year: "2024",
  },
  {
    value: "~$1B",
    label: "in federal, state & local taxes",
    detail: "Generated by economic activity Somali workers support (IMPLAN)",
    source: "Dr. Bruce Corrie, Empowering Strategies",
    sourceUrl:
      "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
    year: "2024",
  },
  {
    value: "~70%",
    label: "labor force participation",
    detail: "Above the general Minnesota population and most immigrant groups",
    source: "U.S. Census Bureau via Star Tribune",
    sourceUrl:
      "https://www.startribune.com/trump-administration-immigration-policy-ice-raids/601542918",
    year: "2025",
  },
  {
    value: "11%",
    label: "of MN animal food processing workers are Somali",
    detail:
      "Also 15%+ of Somali immigrants work in home health care — critical shortage sectors",
    source: "Minnesota Chamber Foundation",
    sourceUrl:
      "https://www.mnchamber.com/sites/default/files/The%20Economic%20Contributions%20of%20Immigrants%20in%20Minnesota%203.23.21.pdf",
    year: "2021",
  },
];

export const trendTable = {
  title: "Two decades of upward mobility",
  note: "Somali foreign-born population in Minnesota, 2000 vs. 2014–2018",
  source: "Minnesota Compass via Minnesota Chamber Foundation",
  sourceUrl:
    "https://www.mnchamber.com/sites/default/files/The%20Economic%20Contributions%20of%20Immigrants%20in%20Minnesota%203.23.21.pdf",
  rows: [
    {
      indicator: "Poverty rate",
      then: 62.9,
      now: 47.6,
      betterIsDown: true,
      unit: "%",
      note: "By 2024, poverty for all Somali Minnesotans (incl. U.S.-born) was 22.8%",
    },
    {
      indicator: "Workforce participation",
      then: 46.1,
      now: 66.4,
      betterIsDown: false,
      unit: "%",
    },
    {
      indicator: "Homeownership",
      then: 1.7,
      now: 9.4,
      betterIsDown: false,
      unit: "%",
    },
    {
      indicator: "High school graduate or more",
      then: 54.2,
      now: 56.7,
      betterIsDown: false,
      unit: "%",
    },
  ],
};

export const industries = [
  "Education & health care",
  "Retail trade",
  "Transportation & warehousing",
  "Manufacturing",
];

export const economyContext: Stat[] = [
  {
    value: "22.8%",
    label: "poverty rate (all Somali Minnesotans)",
    detail:
      "Down from 62.9% among the foreign-born in 2000 — still above the state average, and falling",
    source: "U.S. Census Bureau, ACS 2024 1-Year",
    sourceUrl:
      "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
    year: "2024",
  },
  {
    value: "~$33,500",
    label: "median household income, Somali-headed households",
    detail:
      "About $18,000 below the average for Black-headed households statewide — households are also larger and younger than average",
    source: "Minnesota Compass",
    sourceUrl:
      "https://www.mncompass.org/data-insights/articles/importance-data-disaggregation-minnesotas-black-communities",
    year: "2024",
  },
];

// ---------- HISTORY ----------
export const timeline = [
  {
    year: "1991",
    title: "Civil war begins",
    text: "Somalia's government collapses and the country falls into civil war. The UN reports more than one million Somalis flee as refugees and 1.5 million are displaced within Somalia.",
    source: "Minnesota Historical Society",
    sourceUrl:
      "https://www.mnhs.org/mnopedia/search/index/somali-and-somali-american-experiences-minnesota",
  },
  {
    year: "1992",
    title: "First arrivals — for jobs",
    text: "The U.S. begins issuing refugee visas to Somalis and the first refugees arrive in Minnesota. That summer, a group of Somali men travels from Sioux Falls and San Diego to Marshall, Minnesota, for jobs at turkey-processing plants. Word of steady work spreads through the diaspora.",
    source: "MNopedia / Sahan Journal",
    sourceUrl: "https://sahanjournal.com/immigration/somali-history-in-minnesota/",
  },
  {
    year: "1994",
    title: "Community institutions form",
    text: "The Confederation of Somali Community in Minnesota is founded in Minneapolis's Cedar-Riverside neighborhood — the state's oldest Somali organization.",
    source: "MNopedia (Minnesota Historical Society)",
    sourceUrl:
      "https://www.mnhs.org/mnopedia/search/index/somali-and-somali-american-experiences-minnesota",
  },
  {
    year: "1996",
    title: "Direct resettlement begins",
    text: "Refugees begin arriving directly from camps in East Africa, resettled by Lutheran Social Services, Catholic Charities, and other agencies whose experience with Southeast Asian refugees in the 1970s–80s made Minnesota ready. By the late '90s, Minneapolis holds the largest Somali concentration outside Africa.",
    source: "Sahan Journal",
    sourceUrl: "https://sahanjournal.com/immigration/somali-history-in-minnesota/",
  },
  {
    year: "2000s",
    title: "An entrepreneurial decade",
    text: "Hundreds of Somali entrepreneurs open businesses across the Twin Cities. Karmel Mall becomes a landmark, south Minneapolis corridors are revitalized, and the African Development Center begins providing interest-free financing for entrepreneurs and homebuyers.",
    source: "Sahan Journal / MNopedia",
    sourceUrl: "https://sahanjournal.com/immigration/somali-history-in-minnesota/",
  },
  {
    year: "2010–13",
    title: "First elected offices",
    text: "Hussein Samatar is elected to the Minneapolis School Board — among the first Somali Americans elected to public office in the U.S. In 2013, Abdi Warsame is elected to the Minneapolis City Council.",
    source: "MNopedia / public record",
    sourceUrl:
      "https://en.wikipedia.org/wiki/History_of_Somalis_in_Minneapolis%E2%80%93Saint_Paul",
  },
  {
    year: "2016",
    title: "A national first",
    text: "Ilhan Omar becomes the first Somali American elected to any state legislature in the United States, representing a Minneapolis district in the Minnesota House.",
    source: "Public record",
    sourceUrl:
      "https://en.wikipedia.org/wiki/History_of_Somalis_in_Minneapolis%E2%80%93Saint_Paul",
  },
  {
    year: "2018 →",
    title: "A generation takes root",
    text: "Omar is elected to Congress — the first Somali American U.S. Representative. Today Somali Minnesotans serve in the Legislature, on city councils, and on school boards statewide. A majority of the community is now U.S.-born, and 91% are citizens.",
    source: "Public record / ACS via Minnesota Reformer",
    sourceUrl:
      "https://minnesotareformer.com/briefs/most-somali-people-in-america-and-minnesota-are-citizens/",
  },
];

// ---------- SOURCES ----------
export const sources = [
  {
    name: "U.S. Census Bureau — ACS 2024 1-Year, Somali (alone or in any combination), Minnesota",
    url: "https://data.census.gov/table?t=1325&g=040XX00US27",
  },
  {
    name: "Minnesota Reformer — citizenship and population analysis (ACS/IPUMS)",
    url: "https://minnesotareformer.com/briefs/most-somali-people-in-america-and-minnesota-are-citizens/",
  },
  {
    name: "Minnesota Chamber Foundation — The Economic Contributions of Immigrants in Minnesota (2021)",
    url: "https://www.mnchamber.com/sites/default/files/The%20Economic%20Contributions%20of%20Immigrants%20in%20Minnesota%203.23.21.pdf",
  },
  {
    name: "Dr. Bruce Corrie (Concordia University) — Latest Data on Somali Minnesotans 2024",
    url: "https://empoweringstrategies.org/latest-data-on-somali-minnesotans-2024/",
  },
  {
    name: "Dr. Bruce Corrie — FAQ: Economic Contributions of Somalis in Minnesota",
    url: "https://empoweringstrategies.org/faq-economic-contributions-of-somalis-in-minnesota/",
  },
  {
    name: "Minnesota Compass — Cultural communities: Somali population",
    url: "https://www.mncompass.org/topics/demographics/cultural-communities/somali",
  },
  {
    name: "Minnesota Compass — The importance of data disaggregation: Minnesota's Black communities",
    url: "https://www.mncompass.org/data-insights/articles/importance-data-disaggregation-minnesotas-black-communities",
  },
  {
    name: "Minnesota Historical Society / MNopedia — Somali and Somali American Experiences in Minnesota",
    url: "https://www.mnhs.org/mnopedia/search/index/somali-and-somali-american-experiences-minnesota",
  },
  {
    name: "Sahan Journal — How did Minnesota become a hub for the Somali diaspora?",
    url: "https://sahanjournal.com/immigration/somali-history-in-minnesota/",
  },
  {
    name: "KTTC — By the numbers: Minnesota's Somali population, according to Census data",
    url: "https://www.kttc.com/2025/12/04/by-numbers-minnesotas-somali-population-according-census-data/",
  },
  {
    name: "KSTP — Somali Minnesotans drive economic growth",
    url: "https://kstp.com/kstp-news/top-news/somali-minnesotans-drive-economic-growth-pay-67m-taxes-annually/",
  },
  {
    name: "MPR News — Economist: Immigrants contribute $26 billion to Minnesota's economy",
    url: "https://www.mprnews.org/episode/2025/12/11/economist-immigrants-contribute-26-billion-to-minnesotas-economy",
  },
];
