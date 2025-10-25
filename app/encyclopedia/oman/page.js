
import countryData from "../../content/countries/oman.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function OmanPage() {
  return <CountryPageTemplate data={countryData} />;
}
