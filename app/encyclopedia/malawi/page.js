
import countryData from "../../content/countries/malawi.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MalawiPage() {
  return <CountryPageTemplate data={countryData} />;
}
