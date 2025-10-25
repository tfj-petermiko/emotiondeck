
import countryData from "../../content/countries/saint_martin.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SaintMartinPage() {
  return <CountryPageTemplate data={countryData} />;
}
