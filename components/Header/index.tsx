'use client';
import { Logo } from '@/app/assets/logo';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { usePathname, useRouter } from '../../helpers/navigation';
import { Navbar } from '../Navbar';
import s from './style.module.scss';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const CL = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [currentCountry, setCurrentCountry] = useState(CL);

  const handleChangeVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSelect = (lang: string) => {
    router.push(pathname, { locale: lang });
    setCurrentCountry(lang);
  };

  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <Link href='/' className={s.logo}>
          <Logo />
        </Link>
        <Navbar />
      </div>
      <div className={s.headerRight}>
        <div className={s.headerButtons}>
          <button onClick={handleChangeVisible} className={s.langBtn}>
            {currentCountry} <MdKeyboardArrowDown size={12} />
          </button>
          <button className={s.authBtn}>Войти</button>
        </div>
        {isVisible && (
          <div className={s.langs}>
            <div className={s.langItem} onClick={() => handleSelect('en')}>
              ENG
            </div>
            <div className={s.langItem} onClick={() => handleSelect('ru')}>
              РУС
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
