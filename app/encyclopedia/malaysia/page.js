
import countryData from "../../content/countries/malaysia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MalaysiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
