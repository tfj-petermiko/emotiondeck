
import countryData from "../../content/countries/denmark.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function DenmarkPage() {
  return <CountryPageTemplate data={countryData} />;
}
