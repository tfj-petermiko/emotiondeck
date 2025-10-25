
import countryData from "../../content/countries/united_kingdom.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UnitedKingdomPage() {
  return <CountryPageTemplate data={countryData} />;
}
