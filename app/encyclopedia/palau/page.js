
import countryData from "../../content/countries/palau.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PalauPage() {
  return <CountryPageTemplate data={countryData} />;
}
