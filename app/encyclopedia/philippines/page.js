
import countryData from "../../content/countries/philippines.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PhilippinesPage() {
  return <CountryPageTemplate data={countryData} />;
}
