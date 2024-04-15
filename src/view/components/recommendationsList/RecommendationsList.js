import { useMemo } from "react";
import Recommendation from "./recommendation/Recommendation";

const RecommendationsList = () => {
  const recs = ["recommendation1", "recommendation2", "recommendation3"];

  return (
    <>
      <Recommendation data={recs[0]} />
      <Recommendation data={recs[1]} />
      <Recommendation data={recs[2]} />
    </>
  );
};

export default RecommendationsList;
