
import countryData from "../../content/countries/cayman_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CaymanIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}
