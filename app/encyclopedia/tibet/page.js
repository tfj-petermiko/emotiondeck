
import countryData from "../../content/countries/tibet.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TibetPage() {
  return <CountryPageTemplate data={countryData} />;
}
