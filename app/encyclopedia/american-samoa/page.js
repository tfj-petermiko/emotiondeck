
import countryData from "../../content/countries/american_samoa.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AmericanSamoaPage() {
  return <CountryPageTemplate data={countryData} />;
}
