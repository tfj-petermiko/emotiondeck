
import countryData from "../../content/countries/afghanistan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AfghanistanPage() {
  return <CountryPageTemplate data={countryData} />;
}
