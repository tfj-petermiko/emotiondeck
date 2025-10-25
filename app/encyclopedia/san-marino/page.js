
import countryData from "../../content/countries/san_marino.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SanMarinoPage() {
  return <CountryPageTemplate data={countryData} />;
}
