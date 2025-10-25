
import countryData from "../../content/countries/lesotho.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LesothoPage() {
  return <CountryPageTemplate data={countryData} />;
}
