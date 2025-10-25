
import countryData from "../../content/countries/guernsey.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GuernseyPage() {
  return <CountryPageTemplate data={countryData} />;
}
