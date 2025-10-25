
import countryData from "../../content/countries/liechtenstein.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LiechtensteinPage() {
  return <CountryPageTemplate data={countryData} />;
}
