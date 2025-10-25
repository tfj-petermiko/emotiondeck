
import countryData from "../../content/countries/rwanda.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function RwandaPage() {
  return <CountryPageTemplate data={countryData} />;
}
