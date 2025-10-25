
import countryData from "../../content/countries/belize.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BelizePage() {
  return <CountryPageTemplate data={countryData} />;
}
