import { useDispatch, useSelector } from "react-redux";
import { useGetStatisticsByGroupIdAndYearQuery } from "../../../transport/statistics";
import {
  setCategoryId,
  setGroupId,
  setYear,
} from "../../state/slices/statistics";

const useStatistics = () => {
  const dispatch = useDispatch();
  const { groupId, categoryId, year } = useSelector(
    (state) => state.statistics,
  );
  const { data: statisticsData = [], isSuccess } =
    useGetStatisticsByGroupIdAndYearQuery({ groupId, categoryId, year });

  const handleGroupIdChange = (groupId) => {
    dispatch(setGroupId(groupId));
  };

  const handleCategoryIdChange = (categoryId) => {
    dispatch(setCategoryId(categoryId));
  };

  const handleYearChange = (year) => {
    dispatch(setYear(year));
  };

  return {
    handleGroupIdChange,
    handleYearChange,
    handleCategoryIdChange,
    statisticsData,
    isSuccess,
    groupId,
    categoryId,
    year,
  };
};

export default useStatistics;
