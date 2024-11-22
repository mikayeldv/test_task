'use client';
import appStore from '@/app/assets/app-store.png';
import { Logo } from '@/app/assets/logo';
import playMarket from '@/app/assets/play-market.png';
import Image from 'next/image';
import s from './style.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerLeft}>
        <Logo />
        <div className={s.footerStoreBlock}>
          <Image src={appStore} alt='appStore' />
          <Image src={playMarket} alt='playMarket' />
        </div>
      </div>
      <div className={s.footerRight}>
        <ul>
          <li className={s.footerSubTitle}>Заголовок</li>
          <li className={s.footerLink}>Ссылка</li>
          <li className={s.footerLink}>Ссылка</li>
          <li className={s.footerLink}>Ссылка</li>
        </ul>
        <ul>
          <li className={s.footerSubTitle}>Заголовок</li>
          <li className={s.footerLink}>Ссылка</li>
          <li className={s.footerLink}>Ссылка</li>
          <li className={s.footerLink}>Ссылка</li>
        </ul>
        <ul>
          <li className={s.footerSubTitle}>Заголовок</li>
          <li className={s.footerLink}>Ссылка</li>
          <li className={s.footerLink}>Ссылка</li>
          <li className={s.footerLink}>Ссылка</li>
        </ul>
      </div>
    </footer>
  );
};
