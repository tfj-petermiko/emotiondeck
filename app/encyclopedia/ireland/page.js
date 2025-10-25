
import countryData from "../../content/countries/ireland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IrelandPage() {
  return <CountryPageTemplate data={countryData} />;
}
