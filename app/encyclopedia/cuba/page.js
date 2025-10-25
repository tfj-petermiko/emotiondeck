
import countryData from "../../content/countries/cuba.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CubaPage() {
  return <CountryPageTemplate data={countryData} />;
}
