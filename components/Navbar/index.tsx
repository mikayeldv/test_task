import { MdKeyboardArrowDown } from 'react-icons/md';
import s from './style.module.scss';

export const Navbar = () => {
  return (
    <nav className={s.navBar}>
      <ul className={s.navListItems}>
        <li className={`${s.navListItem} ${s.navListItemActive}`}>Ссылка</li>
        <li className={s.navListItem}>Ссылка</li>
        <li className={s.navListItem}>Ссылка</li>
        <li className={s.navListItem}>
          Выпадающий список <MdKeyboardArrowDown size={12} />
        </li>
      </ul>
    </nav>
  );
};
