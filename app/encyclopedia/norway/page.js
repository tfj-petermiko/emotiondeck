
import countryData from "../../content/countries/norway.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NorwayPage() {
  return <CountryPageTemplate data={countryData} />;
}
