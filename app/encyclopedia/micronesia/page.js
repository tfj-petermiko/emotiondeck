
import countryData from "../../content/countries/micronesia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MicronesiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
