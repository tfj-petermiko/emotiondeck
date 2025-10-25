
import countryData from "../../content/countries/malta.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MaltaPage() {
  return <CountryPageTemplate data={countryData} />;
}
