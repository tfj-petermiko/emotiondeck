
import countryData from "../../content/countries/western_sahara.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function WesternSaharaPage() {
  return <CountryPageTemplate data={countryData} />;
}
