
import countryData from "../../content/countries/pakistan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PakistanPage() {
  return <CountryPageTemplate data={countryData} />;
}
