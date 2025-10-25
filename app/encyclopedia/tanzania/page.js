
import countryData from "../../content/countries/tanzania.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TanzaniaPage() {
  return <CountryPageTemplate data={countryData} />;
}
