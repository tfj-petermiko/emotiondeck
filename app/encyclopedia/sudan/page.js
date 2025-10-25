
import countryData from "../../content/countries/sudan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SudanPage() {
  return <CountryPageTemplate data={countryData} />;
}
