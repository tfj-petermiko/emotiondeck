
import countryData from "../../content/countries/bhutan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BhutanPage() {
  return <CountryPageTemplate data={countryData} />;
}
