
import countryData from "../../content/countries/samoa.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SamoaPage() {
  return <CountryPageTemplate data={countryData} />;
}
