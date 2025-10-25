
import countryData from "../../content/countries/burundi.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BurundiPage() {
  return <CountryPageTemplate data={countryData} />;
}
