
import countryData from "../../content/countries/tunisia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TunisiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
