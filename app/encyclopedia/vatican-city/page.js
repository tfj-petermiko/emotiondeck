
import countryData from "../../content/countries/vatican_city.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function VaticanCityPage() {
  return <CountryPageTemplate data={countryData} />;
}
