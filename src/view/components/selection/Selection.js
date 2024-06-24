import { useState } from "react";
import { GroupFrom } from "../forms/GroupForm/GroupFrom";
import useDiagnostics from "../../../viewmodel/hooks/diagnostics/useDiagnostics";

import s from "./Selection.module.scss";
import useGroups from "../../../viewmodel/hooks/groups/useGroups";
import useCategories from "../../../viewmodel/hooks/categories/useCategories";
import SelectionCategoryItem from "./selectionItem/SelectionCategoryItem";
import SelectionGroupItem from "./selectionItem/SelectionGroupItem";
import SelectionYearItem from "./selectionItem/SelectionYearItem";
import useStatistics from "../../../viewmodel/hooks/statistics/useStatistics";
import useRecommendations from "../../../viewmodel/hooks/recommendations/useRecommendations";
import useAuth from "../../../viewmodel/hooks/auth/useAuth";
import { MyButton } from "../button/MyButton";
import { Button } from "@material-tailwind/react";

const Selection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const years = [2022, 2023, 2024];
  const {
    groupId,
    categoryId,
    year,
    handleGroupIdChange,
    handleCategoryIdChange,
    handleYearChange,
  } = useDiagnostics();

  const {
    handleYearChange: handleYearChangeStatistics,
    handleCategoryIdChange: handleCategoryIdChangeStatistics,
    handleGroupIdChange: handleGroupIdChangeStatistics,
  } = useStatistics();

  const role = localStorage.getItem("role");

  const { handleCategoryIdChange: handleCategoryIdChangeRecs } =
    useRecommendations();

  const { groupsData, isSuccessGroups } = useGroups();

  const { categoriesData, isSuccessCategories } = useCategories();

  const onChangeGroup = (id) => {
    handleGroupIdChange(id);
    handleGroupIdChangeStatistics(id);
  };

  const onChangeYear = (y) => {
    handleYearChange(y);
    handleYearChangeStatistics(y);
  };

  const onChangeCategory = (c) => {
    handleCategoryIdChange(c);
    handleCategoryIdChangeRecs(c);
    handleCategoryIdChangeStatistics(c);
  };

  return (
    <div className={s.selection}>
      {role === "educator" && (
        <SelectionGroupItem
          label={"Группа"}
          data={groupsData}
          onChange={onChangeGroup}
        />
      )}
      <SelectionCategoryItem
        label={"Категория"}
        data={categoriesData}
        onChange={onChangeCategory}
      />
      {role === "educator" && (
        <Button size="sm" className="rounded-full">+</Button>
      )}
      <SelectionYearItem label={"Год"} data={years} onChange={onChangeYear} />
    </div>
  );
};

export default Selection;
