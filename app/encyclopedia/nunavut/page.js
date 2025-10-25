
import countryData from "../../content/countries/nunavut.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NunavutPage() {
  return <CountryPageTemplate data={countryData} />;
}
