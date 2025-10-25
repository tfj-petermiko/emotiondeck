
import countryData from "../../content/countries/fiji.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function FijiPage() {
  return <CountryPageTemplate data={countryData} />;
}
