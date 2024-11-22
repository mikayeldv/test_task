import { ITitle } from '../../constants/types';
import s from './style.module.scss';

export const Title = ({ title }: ITitle) => {
  return (
    <div className={s.titleBlock}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );
};
