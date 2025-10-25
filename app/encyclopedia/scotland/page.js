
import countryData from "../../content/countries/scotland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ScotlandPage() {
  return <CountryPageTemplate data={countryData} />;
}
