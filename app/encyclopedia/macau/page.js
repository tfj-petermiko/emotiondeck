
import countryData from "../../content/countries/macau.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MacauPage() {
  return <CountryPageTemplate data={countryData} />;
}
