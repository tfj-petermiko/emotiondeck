
import countryData from "../../content/countries/mauritius.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MauritiusPage() {
  return <CountryPageTemplate data={countryData} />;
}
