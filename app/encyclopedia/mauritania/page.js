
import countryData from "../../content/countries/mauritania.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MauritaniaPage() {
  return <CountryPageTemplate data={countryData} />;
}
