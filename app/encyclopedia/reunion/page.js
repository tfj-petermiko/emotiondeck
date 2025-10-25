
import countryData from "../../content/countries/reunion.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ReunionPage() {
  return <CountryPageTemplate data={countryData} />;
}
