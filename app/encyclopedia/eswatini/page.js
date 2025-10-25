
import countryData from "../../content/countries/eswatini.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EswatiniPage() {
  return <CountryPageTemplate data={countryData} />;
}
