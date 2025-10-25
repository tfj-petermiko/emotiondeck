
import countryData from "../../content/countries/tajikistan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TajikistanPage() {
  return <CountryPageTemplate data={countryData} />;
}
