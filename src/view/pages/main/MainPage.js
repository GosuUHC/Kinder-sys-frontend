import RecommendationsList from "../../components/recommendationsList/RecommendationsList";
import Table from "../../components/table/Table";
import Selection from "../../components/selection/Selection";
import { ChildrenForm } from "../../components/forms/ChildrenForm/ChildrenForm";
import { Stats } from "../../components/stats/Stats";
import useAuth from "../../../viewmodel/hooks/auth/useAuth";

const EducatorPage = () => {

  const { role } = useAuth();

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="ml-auto mr-auto mt-2 flex-1">
          <Selection />
        </div>
        <div className="ml-auto mr-auto flex flex-row gap-10">
          <div className="flex flex-col gap-2">
            <div className="py-3">
              <Table />
              <ChildrenForm group="группа 1" />
            </div>
            <div className="py-3">
              <Stats />
            </div>
          </div>
          <div className="ml-auto mr-auto mt-2 flex-1">
            <RecommendationsList />
          </div>
          <div className={role}></div>
        </div>
      </div>
    </>
  );
};

export default EducatorPage;
