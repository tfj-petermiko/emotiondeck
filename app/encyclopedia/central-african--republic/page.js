
import countryData from "../../content/countries/central_african_republic.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CentralAfricanRepublicPage() {
  return <CountryPageTemplate data={countryData} />;
}
