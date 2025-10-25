
import countryData from "../../content/countries/czechia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CzechiaPage() {
  return <CountryPageTemplate data={countryData} />;
}
