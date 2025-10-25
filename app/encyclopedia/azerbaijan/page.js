
import countryData from "../../content/countries/azerbaijan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AzerbaijanPage() {
  return <CountryPageTemplate data={countryData} />;
}
