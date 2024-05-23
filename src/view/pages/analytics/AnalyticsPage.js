import { useState } from "react";
import RecommendationsList from "../../components/recommendationsList/RecommendationsList";
import Selection from "../../components/selection/Selection";
import { Stats } from "../../components/stats/Stats";
import { MyButton } from "../../components/button/MyButton";
import { RecommendationForm } from "../../components/forms/RecommendationsFrom/RecommendationForm";

import s from "./AnalyticsPage.module.scss";

const AnalyticsPage = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  // const { diagnosticsData } = useDiagnostics();

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="ml-auto mr-auto mt-2 flex-1">
          {/* <Selection /> */}
        </div>
        <div className="ml-auto mr-auto flex flex-row gap-10">
          <div className="flex flex-col gap-2">
            <div className="py-3">
              <Stats />
            </div>
          </div>
          <div
            className={`ml-auto mr-auto mt-2 flex-1 ${s.recommendation_container}`}
          >
            <RecommendationsList />
            <MyButton text="Добавить рекомндацию" func={toggleActive} />
            <RecommendationForm
              isactive={isActive}
              toggleactive={toggleActive}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
