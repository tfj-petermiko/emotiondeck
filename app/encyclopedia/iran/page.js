
import countryData from "../../content/countries/iran.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IranPage() {
  return <CountryPageTemplate data={countryData} />;
}
