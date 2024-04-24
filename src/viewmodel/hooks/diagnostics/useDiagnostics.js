import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setSelectedGroupId,
} from "../../state/slices/diagnostics";
import { useGetDiagnosticsQuery } from "../../../transport/diagnostics";

const useDiagnostics = () => {
  const dispatch = useDispatch();
  const diagnostics = useSelector((state) => state.diagnostics);
  const {
    data: diagnosticsData = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDiagnosticsQuery(diagnostics.selectedGroupId);

  const handleSelectedCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleSelectedGroupIdChange = (selectedGroupId) => {
    dispatch(setSelectedGroupId(selectedGroupId));
  };

  return {
    diagnosticsData,
    handleSelectedCategoryChange,
    handleSelectedGroupIdChange,
  };
};

export default useDiagnostics;
