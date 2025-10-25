
import countryData from "../../content/countries/china.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ChinaPage() {
  return <CountryPageTemplate data={countryData} />;
}
