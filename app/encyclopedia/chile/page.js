
import countryData from "../../content/countries/chile.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ChilePage() {
  return <CountryPageTemplate data={countryData} />;
}
