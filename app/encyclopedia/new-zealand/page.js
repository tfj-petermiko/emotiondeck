
import countryData from "../../content/countries/new_zealand.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NewZealandPage() {
  return <CountryPageTemplate data={countryData} />;
}
