
import countryData from "../../content/countries/lebanon.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LebanonPage() {
  return <CountryPageTemplate data={countryData} />;
}
