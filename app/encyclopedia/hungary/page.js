
import countryData from "../../content/countries/hungary.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function HungaryPage() {
  return <CountryPageTemplate data={countryData} />;
}
