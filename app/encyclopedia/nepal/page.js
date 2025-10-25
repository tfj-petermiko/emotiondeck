
import countryData from "../../content/countries/nepal.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NepalPage() {
  return <CountryPageTemplate data={countryData} />;
}
