
import countryData from "../../content/countries/turkmenistan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TurkmenistanPage() {
  return <CountryPageTemplate data={countryData} />;
}
