
import countryData from "../../content/countries/marshall_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MarshallIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}
