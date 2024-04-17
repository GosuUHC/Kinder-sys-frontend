import { useState } from "react"; 
import RecommendationsList from "../../components/recommendationsList/RecommendationsList";
import Table from "../../components/table/Table";
import Selection from "../../components/selection/Selection";
import { ChildrenForm } from "../../components/forms/ChildrenForm/ChildrenForm";


const EducatorPage = () => {


  return (
    <>
      <div className="flex flex-col">
        <div className="ml-auto mr-auto mt-2 flex-1">
          <Selection/>
        </div>
        <div className="flex flex-row ml-auto mr-auto">
          <div className="flex flex-col">
            <div className="">
              <Table />
              <ChildrenForm group="группа 1" />
            </div>
            <div className="">
              {/* <Table /> */}
            </div>
          </div>
          <div className="ml-auto mr-auto mt-2 flex-1">
            <RecommendationsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducatorPage;
