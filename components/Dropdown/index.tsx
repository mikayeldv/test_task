import { IDropdown } from '../../constants/types';
import s from './style.module.scss';

export const Dropdown = ({ search, Component }: IDropdown) => {
  return (
    <div className={s.searchDropDownBlock}>
      {search.map((c, i) => (
        <div key={i} className={s.searchDropDownItem}>
          <Component c={c} isFullWidth={true} />
        </div>
      ))}
    </div>
  );
};
