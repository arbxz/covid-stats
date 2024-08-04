export interface CovidGlobalData {
  updated: number;
  cases: number;
  todayCases: number | null;
  deaths: number;
  todayDeaths: number | null;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number | null;
  oneDeathPerPeople: number | null;
  oneTestPerPeople: number | null;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}
