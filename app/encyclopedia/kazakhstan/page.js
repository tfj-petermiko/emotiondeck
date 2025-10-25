
import countryData from "../../content/countries/kazakhstan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function KazakhstanPage() {
  return <CountryPageTemplate data={countryData} />;
}
