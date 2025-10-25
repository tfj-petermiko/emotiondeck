
import countryData from "../../content/countries/hong_kong.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function HongKongPage() {
  return <CountryPageTemplate data={countryData} />;
}
