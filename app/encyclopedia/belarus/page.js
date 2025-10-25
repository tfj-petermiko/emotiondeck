
import countryData from "../../content/countries/belarus.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BelarusPage() {
  return <CountryPageTemplate data={countryData} />;
}
