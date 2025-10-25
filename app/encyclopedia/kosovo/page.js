
import countryData from "../../content/countries/kosovo.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function KosovoPage() {
  return <CountryPageTemplate data={countryData} />;
}
