
import countryData from "../../content/countries/svalbard.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SvalbardPage() {
  return <CountryPageTemplate data={countryData} />;
}
