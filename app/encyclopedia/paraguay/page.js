
import countryData from "../../content/countries/paraguay.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ParaguayPage() {
  return <CountryPageTemplate data={countryData} />;
}
