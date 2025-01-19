import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats, icon }) => {
  const icons = [
    FaRegThumbsUp,
    MdPeople,
    MdOutlineProductionQuantityLimits,
    GiTreeDoor,
  ];
  return (
    <div>
      <h3 className={style.title}>{title}</h3>

      <ul className={style.list}>
        {stats.map((item, index) => {
          return (
            <li className={style.item} key={item.id}>
              <StatisticsItem
                title={item.title}
                total={item.total}
                icon={icons[index]}
              />
            </li>
          );
        })}
        {/* Довільна кіл-сть
    <li className={style.item}>
      <StatisticsItem />
    </li>
*/}
      </ul>
    </div>
  );
};

export default Statistics;
