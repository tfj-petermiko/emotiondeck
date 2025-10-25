
import countryData from "../../content/countries/serbia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SerbiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
