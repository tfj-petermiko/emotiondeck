
import countryData from "../../content/countries/gabon.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GabonPage() {
  return <CountryPageTemplate data={countryData} />;
}
