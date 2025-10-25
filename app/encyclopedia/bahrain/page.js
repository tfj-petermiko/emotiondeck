
import countryData from "../../content/countries/bahrain.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BahrainPage() {
  return <CountryPageTemplate data={countryData} />;
}
