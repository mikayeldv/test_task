import { IOperator, OperatorsListProps } from '../../constants/types';
import s from './style.module.scss';

export const OperatorsList = ({ operators }: OperatorsListProps) => {
  return (
    <div className={s.operatorsBlock}>
      {operators.map((operator: IOperator, i) => (
        <p key={i}>{operator.phone_view}</p>
      ))}
    </div>
  );
};
