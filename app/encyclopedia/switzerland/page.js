
import countryData from "../../content/countries/switzerland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SwitzerlandPage() {
  return <CountryPageTemplate data={countryData} />;
}
