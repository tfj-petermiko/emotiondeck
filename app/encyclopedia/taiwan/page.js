
import countryData from "../../content/countries/taiwan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TaiwanPage() {
  return <CountryPageTemplate data={countryData} />;
}
