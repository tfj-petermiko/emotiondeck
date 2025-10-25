
import countryData from "../../content/countries/north_korea.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NorthKoreaPage() {
  return <CountryPageTemplate data={countryData} />;
}
