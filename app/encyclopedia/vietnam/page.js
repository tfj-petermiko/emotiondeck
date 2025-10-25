
import countryData from "../../content/countries/vietnam.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function VietnamPage() {
  return <CountryPageTemplate data={countryData} />;
}
