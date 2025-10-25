
import countryData from "../../content/countries/chad.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ChadPage() {
  return <CountryPageTemplate data={countryData} />;
}
