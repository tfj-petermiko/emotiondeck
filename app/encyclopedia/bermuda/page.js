
import countryData from "../../content/countries/bermuda.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BermudaPage() {
  return <CountryPageTemplate data={countryData} />;
}
