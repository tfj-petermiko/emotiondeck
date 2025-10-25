
import countryData from "../../content/countries/aruba.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ArubaPage() {
  return <CountryPageTemplate data={countryData} />;
}
