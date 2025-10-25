
import countryData from "../../content/countries/christmas_island.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ChristmasIslandPage() {
  return <CountryPageTemplate data={countryData} />;
}
