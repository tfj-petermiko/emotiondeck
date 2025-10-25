
import countryData from "../../content/countries/isle_of_man.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IsleofManPage() {
  return <CountryPageTemplate data={countryData} />;
}
