
import countryData from "../../content/countries/south_korea.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SouthKoreaPage() {
  return <CountryPageTemplate data={countryData} />;
}
