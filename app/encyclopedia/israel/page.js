
import countryData from "../../content/countries/israel.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IsraelPage() {
  return <CountryPageTemplate data={countryData} />;
}
