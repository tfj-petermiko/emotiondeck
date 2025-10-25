
import countryData from "../../content/countries/puerto_rico.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PuertoRicoPage() {
  return <CountryPageTemplate data={countryData} />;
}
