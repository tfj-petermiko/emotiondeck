
import countryData from "../../content/countries/moldova.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MoldovaPage() {
  return <CountryPageTemplate data={countryData} />;
}
