import { useMemo } from "react";
import Recommendation from "./recommendation/Recommendation";

import s from './RecommendationList.module.scss'

const RecommendationsList = () => {
  const recs = ["recommendation1", "recommendation2", "recommendation3"];

  return (
    <div className={s.recommendations_list}>
      <Recommendation data={recs[0]} />
      <Recommendation data={recs[1]} />
      <Recommendation data={recs[2]} />
      <Recommendation data={recs[2]} />
      <Recommendation data={recs[2]} />
      <Recommendation data={recs[2]} />
      <Recommendation data={recs[2]} />
    </div>
  );
};

export default RecommendationsList;
