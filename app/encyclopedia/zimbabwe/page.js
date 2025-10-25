
import countryData from "../../content/countries/zimbabwe.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ZimbabwePage() {
  return <CountryPageTemplate data={countryData} />;
}
