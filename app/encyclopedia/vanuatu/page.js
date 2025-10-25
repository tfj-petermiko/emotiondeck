
import countryData from "../../content/countries/vanuatu.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function VanuatuPage() {
  return <CountryPageTemplate data={countryData} />;
}
