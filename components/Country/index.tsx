'use client';
import { useRouter } from 'next/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CountryProps } from '../../constants/types';
import Flags from '../../src/app/assets/flags';
import s from './style.module.scss';

export const Country = ({ c, isFullWidth }: CountryProps) => {
  const flag = Flags[c.iso]?.src;

  const router = useRouter();

  const handleRedirect = () => {
    router.push(c.url);
  };

  return (
    <div
      className={`${s.country} ${isFullWidth ? s.cwfw : s.cwhw}`}
      onClick={handleRedirect}
    >
      <div className={s.coutryInfo}>
        <div className={`${s.countryFlag} ${isFullWidth ? s.cfwfw : s.cfwhw}`}>
          <img src={flag} className={s.countrySvg} />
        </div>
        <div className={s.countryTitle}>
          <p>{c.country}</p>
          <p className={s.countrySubtitle}>
            от {c.price.symbol}
            {c.cost_per_day}/GB
          </p>
        </div>
      </div>
      <div className={s.coutryIcon}>
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
  );
};
