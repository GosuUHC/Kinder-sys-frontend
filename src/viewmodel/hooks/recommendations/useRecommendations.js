import { useDispatch, useSelector } from "react-redux";
import {
  useAddRecommendationMutation,
  useGetRecommendationsByCategoryIdQuery,
  useGetRecommendationsByGroupIdQuery,
} from "../../../transport/recommendations";
import {
  setCategoryId,
  setGroupId,
  setRecommendationText,
} from "../../state/slices/recommendations";

const useRecommendations = () => {
  const dispatch = useDispatch();

  const { categoryId, groupId, recommendationText } = useSelector(
    (state) => state.recommendations,
  );

  const [addRecommendation] = useAddRecommendationMutation();

  const { data: recommendationsData = [] } =
    useGetRecommendationsByCategoryIdQuery(categoryId);

  const handleCategoryIdChange = (categoryId) => {
    dispatch(setCategoryId(categoryId));
  };

  const handleGroupIdChange = (groupId) => {
    dispatch(setGroupId(groupId));
  };

  const handleRecommendationTextChange = (recommendationText) => {
    dispatch(setRecommendationText(recommendationText));
  };

  const handleAddRecommendation = async (recData) => {
    await addRecommendation(recData);
  };

  return {
    handleCategoryIdChange,
    handleGroupIdChange,
    handleRecommendationTextChange,
    handleAddRecommendation,
    recommendationsData,
    categoryId,
    groupId,
    recommendationText,
  };
};

export default useRecommendations;
