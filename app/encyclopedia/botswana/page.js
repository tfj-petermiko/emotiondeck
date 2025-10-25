
import countryData from "../../content/countries/botswana.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BotswanaPage() {
  return <CountryPageTemplate data={countryData} />;
}
