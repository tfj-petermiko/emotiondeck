
import countryData from "../../content/countries/east_timor.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EastTimorPage() {
  return <CountryPageTemplate data={countryData} />;
}
