
import countryData from "../../content/countries/arctic_circle.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ArcticCirclePage() {
  return <CountryPageTemplate data={countryData} />;
}
