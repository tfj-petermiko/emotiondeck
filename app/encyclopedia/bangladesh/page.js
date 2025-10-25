
import countryData from "../../content/countries/bangladesh.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BangladeshPage() {
  return <CountryPageTemplate data={countryData} />;
}
