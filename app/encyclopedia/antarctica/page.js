
import countryData from "../../content/countries/antarctica.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AntarcticaPage() {
  return <CountryPageTemplate data={countryData} />;
}
