
import countryData from "../../content/countries/guinea.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GuineaPage() {
  return <CountryPageTemplate data={countryData} />;
}
