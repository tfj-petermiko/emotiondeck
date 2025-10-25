
import countryData from "../../content/countries/south_sudan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SouthSudanPage() {
  return <CountryPageTemplate data={countryData} />;
}
