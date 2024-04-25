import Recommendation from "./recommendation/Recommendation";

import s from "./RecommendationList.module.scss";

const RecommendationsList = () => {
  const recs = [
    "Рекоммендация 1",
    "Рекоммендация 2",
    "Рекоммендация 3",
    "Рекоммендация 4",
  ];

  return (
    <div className={s.recommendations_list}>
      <Recommendation data={recs[0]} />
      <Recommendation data={recs[1]} />
      <Recommendation data={recs[2]} />
      <Recommendation data={recs[3]} />
    </div>
  );
};

export default RecommendationsList;
