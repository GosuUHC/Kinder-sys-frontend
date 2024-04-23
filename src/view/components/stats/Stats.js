import { Card, Typography } from "@material-tailwind/react";
import s from "./Stats.module.scss";

export const Stats = ({ start_data, end_data }) => {
  const calculateAverage = (data) => {
    if (data.length === 0) return 0;

    let totalScore = 0;
    let totalChildren = 0;

    data.forEach(({ count, procent }, index) => {
      totalScore += count * index; // Умножаем количество детей на их баллы и добавляем к общей сумме
      totalChildren += parseInt(count); // Считаем общее количество детей
    });
    return (totalScore / totalChildren).toFixed(1); // Делим сумму баллов на общее количество детей и возвращаем среднее значение
  };

  return (
    <Card className={s.stat_container}>
      <div>
        <p className={s.stat_header}>Начало года</p>
        <ul className={s.stat_list}>
          {start_data.map(({ count, procent }, index) => (
            <li className={s.stat_item} key={index}>
              <span>Количество детей с {index} баллов:</span>
              <span>{count}</span>
              <span>{procent}</span>
            </li>
          ))}
          <li className={s.stat_item}>
            <span>Средний балл</span>
            <span>{calculateAverage(start_data)}</span>
          </li>
        </ul>
      </div>
      <div>
        <p className={s.stat_header}>Конец года</p>
        <ul className={s.stat_list}>
          {end_data.map(({ count, procent }, index) => (
            <li className={s.stat_item} key={index}>
              <span>Количество детей с {index} баллов:</span>
              <span>{count}</span>
              <span>{procent}</span>
            </li>
          ))}
          <li className={s.stat_item}>
            <span>Средний балл</span>
            <span>{calculateAverage(end_data)}</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};
