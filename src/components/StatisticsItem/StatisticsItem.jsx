import style from './StatisticsItem.module.css';
const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      {/* Тут повинна бути іконка */}
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
