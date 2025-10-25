
import countryData from "../../content/countries/new_caledonia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NewCaledoniaPage() {
  return <CountryPageTemplate data={countryData} />;
}
