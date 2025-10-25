
import countryData from "../../content/countries/montenegro.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MontenegroPage() {
  return <CountryPageTemplate data={countryData} />;
}
