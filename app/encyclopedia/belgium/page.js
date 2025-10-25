
import countryData from "../../content/countries/belgium.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BelgiumPage() {
  return <CountryPageTemplate data={countryData} />;
}
