
import countryData from "../../content/countries/nicaragua.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NicaraguaPage() {
  return <CountryPageTemplate data={countryData} />;
}
