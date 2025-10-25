
import countryData from "../../content/countries/venezuela.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function VenezuelaPage() {
  return <CountryPageTemplate data={countryData} />;
}
