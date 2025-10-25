
import countryData from "../../content/countries/algeria.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AlgeriaPage() {
  return <CountryPageTemplate data={countryData} />;
}
