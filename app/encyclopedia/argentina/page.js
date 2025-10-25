
import countryData from "../../content/countries/argentina.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ArgentinaPage() {
  return <CountryPageTemplate data={countryData} />;
}
