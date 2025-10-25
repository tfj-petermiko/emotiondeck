
import countryData from "../../content/countries/kyrgyzstan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function KyrgyzstanPage() {
  return <CountryPageTemplate data={countryData} />;
}
