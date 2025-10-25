
import countryData from "../../content/countries/sao_tome_and_principe.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SaoTomeandPrincipePage() {
  return <CountryPageTemplate data={countryData} />;
}
