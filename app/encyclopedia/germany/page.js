
import countryData from "../../content/countries/germany.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GermanyPage() {
  return <CountryPageTemplate data={countryData} />;
}
