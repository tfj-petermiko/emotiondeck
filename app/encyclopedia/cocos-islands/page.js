
import countryData from "../../content/countries/cocos_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CocosIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}
