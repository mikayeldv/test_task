'use client';
import { useState } from 'react';
import { CountriesProps } from '../../constants/types';
import { Country } from '../Country';
import s from './style.module.scss';

export const Countries = ({ countries, defaultCountries }: CountriesProps) => {
  const [showAllCountries, setShowAllCountries] = useState(false);
  const data = showAllCountries ? countries : defaultCountries;

  const handleChangeCountriesList = () => {
    setShowAllCountries((prev) => !prev);
  };

  return (
    <div className={s.countriesBlock}>
      <div className={s.countries}>
        <h2 className={s.countriesTitle}>Популярные страны</h2>
        {data.map((c, i) => (
          <Country c={c} key={i} />
        ))}
        <button onClick={handleChangeCountriesList} className={s.countryBtn}>
          {showAllCountries ? 'Скрыть полный список' : 'Показать все страны'}
        </button>
      </div>
    </div>
  );
};
