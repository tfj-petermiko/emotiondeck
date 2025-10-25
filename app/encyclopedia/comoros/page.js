
import countryData from "../../content/countries/comoros.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ComorosPage() {
  return <CountryPageTemplate data={countryData} />;
}
