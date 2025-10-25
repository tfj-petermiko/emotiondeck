
import countryData from "../../content/countries/sweden.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SwedenPage() {
  return <CountryPageTemplate data={countryData} />;
}
