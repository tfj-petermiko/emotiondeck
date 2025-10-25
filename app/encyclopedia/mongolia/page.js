
import countryData from "../../content/countries/mongolia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MongoliaPage() {
  return <CountryPageTemplate data={countryData} />;
}
