
import countryData from "../../content/countries/portugal.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PortugalPage() {
  return <CountryPageTemplate data={countryData} />;
}
