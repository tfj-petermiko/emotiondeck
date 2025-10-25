
import countryData from "../../content/countries/iraq.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IraqPage() {
  return <CountryPageTemplate data={countryData} />;
}
