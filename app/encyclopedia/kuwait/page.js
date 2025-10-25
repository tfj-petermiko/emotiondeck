
import countryData from "../../content/countries/kuwait.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function KuwaitPage() {
  return <CountryPageTemplate data={countryData} />;
}
