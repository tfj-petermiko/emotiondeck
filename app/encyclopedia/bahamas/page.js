
import countryData from "../../content/countries/bahamas.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BahamasPage() {
  return <CountryPageTemplate data={countryData} />;
}
