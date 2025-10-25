
import countryData from "../../content/countries/south_africa.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SouthAfricaPage() {
  return <CountryPageTemplate data={countryData} />;
}
