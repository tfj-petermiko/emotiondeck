
import countryData from "../../content/countries/gibraltar.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GibraltarPage() {
  return <CountryPageTemplate data={countryData} />;
}
