
import countryData from "../../content/countries/democratic_republic_of_the_congo.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function DemocraticRepublicoftheCongoPage() {
  return <CountryPageTemplate data={countryData} />;
}
