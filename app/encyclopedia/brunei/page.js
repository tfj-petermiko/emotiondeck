
import countryData from "../../content/countries/brunei.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BruneiPage() {
  return <CountryPageTemplate data={countryData} />;
}
