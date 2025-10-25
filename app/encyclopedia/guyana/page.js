
import countryData from "../../content/countries/guyana.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GuyanaPage() {
  return <CountryPageTemplate data={countryData} />;
}
