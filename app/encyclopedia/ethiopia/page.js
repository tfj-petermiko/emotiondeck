
import countryData from "../../content/countries/ethiopia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EthiopiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
