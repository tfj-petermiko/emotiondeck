
import countryData from "../../content/countries/spain.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SpainPage() {
  return <CountryPageTemplate data={countryData} />;
}
