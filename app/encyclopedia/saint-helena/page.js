
import countryData from "../../content/countries/saint_helena.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SaintHelenaPage() {
  return <CountryPageTemplate data={countryData} />;
}
