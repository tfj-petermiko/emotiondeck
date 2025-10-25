
import countryData from "../../content/countries/djibouti.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function DjiboutiPage() {
  return <CountryPageTemplate data={countryData} />;
}
