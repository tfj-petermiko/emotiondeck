
import countryData from "../../content/countries/jersey.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function JerseyPage() {
  return <CountryPageTemplate data={countryData} />;
}
