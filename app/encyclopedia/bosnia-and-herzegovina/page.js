
import countryData from "../../content/countries/bosnia_and_herzegovina.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BosniaandHerzegovinaPage() {
  return <CountryPageTemplate data={countryData} />;
}
