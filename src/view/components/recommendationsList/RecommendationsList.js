import useRecommendations from "../../../viewmodel/hooks/recommendations/useRecommendations";
import { MyButton } from "../button/MyButton";
import Recommendation from "./recommendation/Recommendation";

import s from "./RecommendationList.module.scss";

const RecommendationsList = () => {
  const { recommendationsData, handleDeleteRecommendation } =
    useRecommendations();

  return (
    <div className={s.recommendations_list}>
      {recommendationsData.map(
        ({
          id,
          category,
          highScoreRecommendation,
          middleScoreRecommendation,
          lowScoreRecommendation,
        }) => (
          <>
            <Recommendation
              key={id}
              category={category.name}
              high={highScoreRecommendation}
              mid={middleScoreRecommendation}
              low={lowScoreRecommendation}
            />
            {/* <MyButton
              text={"Удалить"}
              func={() => handleDeleteRecommendation(id)}
            /> */}
          </>
        ),
      )}
    </div>
  );
};

export default RecommendationsList;
