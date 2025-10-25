
import countryData from "../../content/countries/kenya.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function KenyaPage() {
  return <CountryPageTemplate data={countryData} />;
}
