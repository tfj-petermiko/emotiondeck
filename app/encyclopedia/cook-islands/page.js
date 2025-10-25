
import countryData from "../../content/countries/cook_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CookIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}
