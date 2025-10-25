
import countryData from "../../content/countries/united_arab_emirates.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UnitedArabEmiratesPage() {
  return <CountryPageTemplate data={countryData} />;
}
