
import countryData from "../../content/countries/finland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function FinlandPage() {
  return <CountryPageTemplate data={countryData} />;
}
