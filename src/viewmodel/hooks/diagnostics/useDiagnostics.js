import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setGroupId,
  setNewDiagnostics,
  setYear,
  updateDiagnosticsList,
} from "../../state/slices/diagnostics";
import {
  useAddDiagnosticsDataMutation,
  useGetDiagnosticsByGroupIdAndCategoryIdAndYearQuery,
} from "../../../transport/diagnostics";

const useDiagnostics = () => {
  const dispatch = useDispatch();
  const { groupId, categoryId, year } = useSelector(
    (state) => state.diagnostics,
  );
  const { data: diagnosticsData = [] } =
    useGetDiagnosticsByGroupIdAndCategoryIdAndYearQuery({
      groupId,
      categoryId,
      year,
    });

  const [addDiagnostics] = useAddDiagnosticsDataMutation();

  const handleGroupIdChange = (groupId) => {
    dispatch(setGroupId(groupId));
  };

  const handleCategoryIdChange = (categoryId) => {
    dispatch(setCategoryId(categoryId));
  };

  const handleYearChange = (year) => {
    dispatch(setYear(year));
  };

  const handleAddDiagnostics = (newDiagnostics) => {
    dispatch(setNewDiagnostics(newDiagnostics));
    addDiagnostics(newDiagnostics);
  };

  return {
    handleGroupIdChange,
    handleCategoryIdChange,
    handleYearChange,
    handleAddDiagnostics,
    diagnosticsData,
    groupId,
    categoryId,
    year,
  };
};

export default useDiagnostics;
