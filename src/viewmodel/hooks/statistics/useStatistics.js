import { useDispatch, useSelector } from "react-redux";
import { useGetStatisticsByGroupIdAndYearQuery } from "../../../transport/statistics";
import { setGroupId, setYear } from "../../state/slices/statistics";

const useStatistics = () => {
  const dispatch = useDispatch();
  const { groupId, year } = useSelector((state) => state.statistics);
  const { data: statisticsData = [], isSuccess } =
    useGetStatisticsByGroupIdAndYearQuery({ groupId, year });


  console.log(statisticsData);

  const handleGroupIdChange = (groupId) => {
    console.log(groupId);
    dispatch(setGroupId(groupId));
  };

  const handleYearChange = (year) => {
    console.log(year);
    dispatch(setYear(year));
  };

  return {
    handleGroupIdChange,
    handleYearChange,
    statisticsData,
    isSuccess,
    groupId,
    year,
  };
};

export default useStatistics;
