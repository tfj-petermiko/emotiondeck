
import countryData from "../../content/countries/tonga.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TongaPage() {
  return <CountryPageTemplate data={countryData} />;
}
