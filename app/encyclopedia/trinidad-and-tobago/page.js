
import countryData from "../../content/countries/trinidad_and_tobago.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TrinidadandTobagoPage() {
  return <CountryPageTemplate data={countryData} />;
}
