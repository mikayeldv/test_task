import s from "./style.module.scss";

export const data = [
  { id: 0, title: "Очень длинный заголовок" },
  { id: 1, title: "Очень длинный заголовок" },
  { id: 2, title: "Очень длинный заголовок" },
];

export const HelpBlock = () => {
  return (
    <div className={s.helpBlockWrapper}>
      <h2>Как это работает</h2>
      <div className={s.helpBlock}>
        {data.map((item, i) => (
          <div key={item.id} className={s.helpBlockItem}>
            <p className={s.helpBlockItemTitle}>{item.title}</p>
            <div className={s.helpBlockItemContent}></div>
          </div>
        ))}
      </div>
    </div>
  );
};
