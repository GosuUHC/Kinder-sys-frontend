import RecommendationsList from "../../components/recommendationsList/RecommendationsList";
import Table from "../../components/table/Table";

const EducatorPage = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Table />
        </div>
        <div className="ml-6 flex-1">
          <RecommendationsList />
        </div>
      </div>
    </>
  );
};

export default EducatorPage;
