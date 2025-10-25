
import countryData from "../../content/countries/indonesia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IndonesiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
