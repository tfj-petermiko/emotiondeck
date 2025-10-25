
import countryData from "../../content/countries/thailand.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ThailandPage() {
  return <CountryPageTemplate data={countryData} />;
}
