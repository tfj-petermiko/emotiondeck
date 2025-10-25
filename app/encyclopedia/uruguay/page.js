
import countryData from "../../content/countries/uruguay.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UruguayPage() {
  return <CountryPageTemplate data={countryData} />;
}
