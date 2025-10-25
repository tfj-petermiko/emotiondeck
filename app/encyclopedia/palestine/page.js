
import countryData from "../../content/countries/palestine.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PalestinePage() {
  return <CountryPageTemplate data={countryData} />;
}
