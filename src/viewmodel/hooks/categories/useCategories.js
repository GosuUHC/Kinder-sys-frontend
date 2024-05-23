import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../../transport/categories";

const useCategories = () => {
  const { data: categoriesData = [], isSuccess } = useGetCategoriesQuery();

  return {
    categoriesData,
    isSuccess,
  };
};

export default useCategories;
