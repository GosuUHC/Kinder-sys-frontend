import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setTableData,
} from "../../state/slices/diagnostics";

const useDiagnostics = () => {
  const dispatch = useDispatch();
  const { selectedCategory, tableData } = useSelector(
    (state) => state.diagnostics,
  );

  const handleSelectedCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleTableDataChange = (tableData) => {
    dispatch(setTableData(tableData));
  };

  return {
    selectedCategory,
    tableData,
    handleSelectedCategoryChange,
    handleTableDataChange,
  };
};

export default useDiagnostics;
