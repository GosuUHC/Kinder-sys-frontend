import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setGroupId,
  setNewDiagnostics,
  setYear,
} from "../../state/slices/diagnostics";
import {
  useAddDiagnosticsDataMutation,
  useDeleteDiagnosticsDataMutation,
  useGetDiagnosticsByGroupIdAndCategoryIdAndYearQuery,
  useGetDiagnosticsByGroupIdAndYearQuery,
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

  const { data: diagnosticsDataByGroupAndYear = [] } =
    useGetDiagnosticsByGroupIdAndYearQuery({
      groupId,
      year,
    });

  const [addDiagnostics] = useAddDiagnosticsDataMutation();

  const [deleteDiagnostitcs] = useDeleteDiagnosticsDataMutation();

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

  const handleDelete = (diagnosticsId) => {
    deleteDiagnostitcs(diagnosticsId);
  };

  return {
    handleGroupIdChange,
    handleCategoryIdChange,
    handleYearChange,
    handleAddDiagnostics,
    handleDelete,
    diagnosticsData,
    diagnosticsDataByGroupAndYear,
    groupId,
    categoryId,
    year,
  };
};

export default useDiagnostics;
