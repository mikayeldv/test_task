import Flags from "@/app/assets/flags";
import { HelpBlock } from "../../../../../components/HelpBlock";
import { OperatorsList } from "../../../../../components/OperatorsList";
import { ICountryData } from "../../../../../constants/types";
import { getCountryApi } from "../../../../../services/country";
import s from "./style.module.scss";

type CountryProps = {
  params: {
    name: string;
  };
};

export default async function Country({ params }: CountryProps) {
  const res: { data: [countries: ICountryData[]] } | undefined =
    await getCountryApi();
  if (!res) return <div>error</div>;

  const [countries] = res.data;
  const country = countries.find(
    (c) => c.country.split(" ").join("-").toLowerCase() === params.name
  );
  const flagSrc = Flags[country?.iso || 0]?.src;

  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <div className={s.block}>
          <div className={s.leftBlock}>
            <h2>{country?.country}</h2>
            <p>Туристические SIM-карты с интернетом</p>
          </div>
          <div className={s.rightBlock}>
            <img src={flagSrc} className={s.countrySvg} />
          </div>
        </div>
        <div className={s.block}>
          <div className={s.leftSide}>
            <h3>Страны и операторы</h3>
            <div className={s.svgBlock}>
              <img src={flagSrc} className={s.countrySvg} />
              <p className={s.countryTitle}>{country?.country}</p>
            </div>
          </div>
          <OperatorsList operators={country?.operators || []} />
        </div>
        <HelpBlock />
      </div>
    </div>
  );
}
