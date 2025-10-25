
import countryData from "../../content/countries/cameroon.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CameroonPage() {
  return <CountryPageTemplate data={countryData} />;
}
