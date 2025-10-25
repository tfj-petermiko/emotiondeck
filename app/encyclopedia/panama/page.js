
import countryData from "../../content/countries/panama.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PanamaPage() {
  return <CountryPageTemplate data={countryData} />;
}
