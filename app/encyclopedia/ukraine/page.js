
import countryData from "../../content/countries/ukraine.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UkrainePage() {
  return <CountryPageTemplate data={countryData} />;
}
