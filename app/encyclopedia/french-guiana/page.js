
import countryData from "../../content/countries/french_guiana.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function FrenchGuianaPage() {
  return <CountryPageTemplate data={countryData} />;
}
