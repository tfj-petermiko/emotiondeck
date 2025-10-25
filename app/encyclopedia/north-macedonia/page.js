
import countryData from "../../content/countries/north_macedonia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NorthMacedoniaPage() {
  return <CountryPageTemplate data={countryData} />;
}
