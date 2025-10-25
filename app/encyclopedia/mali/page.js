
import countryData from "../../content/countries/mali.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MaliPage() {
  return <CountryPageTemplate data={countryData} />;
}
