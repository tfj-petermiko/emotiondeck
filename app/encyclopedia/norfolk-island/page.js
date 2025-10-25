
import countryData from "../../content/countries/norfolk_island.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NorfolkIslandPage() {
  return <CountryPageTemplate data={countryData} />;
}
