
import countryData from "../../content/countries/morocco.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MoroccoPage() {
  return <CountryPageTemplate data={countryData} />;
}
