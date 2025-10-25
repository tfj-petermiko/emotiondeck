
import countryData from "../../content/countries/benin.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BeninPage() {
  return <CountryPageTemplate data={countryData} />;
}
