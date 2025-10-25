
import countryData from "../../content/countries/greenland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GreenlandPage() {
  return <CountryPageTemplate data={countryData} />;
}
