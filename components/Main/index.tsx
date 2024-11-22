import { useTranslations } from "next-intl";
import { ICountryData } from "../../constants/types";
import { getCountryApi } from "../../services/country";
import { Countries } from "../Countries";
import { HelpBlock } from "../HelpBlock";
import { SearchCountries } from "../Search-countries";
import { Title } from "../Title";
import s from "./style.module.scss";
import { getTranslations } from "next-intl/server";

export const Main = async () => {
  const t = await getTranslations("");
  const res: { data: [countries: ICountryData[]] } | undefined =
    await getCountryApi();
  if (!res) return <div>error</div>;

  const [countries] = res.data;

  return (
    <div className={s.wrapper}>
      <Title title={t("MAIN_TEXT")} />
      <SearchCountries countries={countries} />
      <Countries
        countries={countries}
        defaultCountries={countries.slice(0, 12)}
      />
      <HelpBlock />
    </div>
  );
};
