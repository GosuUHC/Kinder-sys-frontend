import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import s from "../From.module.scss";
import useDiagnostics from "../../../../viewmodel/hooks/diagnostics/useDiagnostics";
import useCategories from "../../../../viewmodel/hooks/categories/useCategories";
import useGroups from "../../../../viewmodel/hooks/groups/useGroups";
import SelectionCategoryItem from "../../selection/selectionItem/SelectionCategoryItem";

const DiagnosticsForm = ({ isActive, toggleActive }) => {
  const [categoryId, setCategoryId] = useState(-1);
  const [childId, setChildId] = useState(-1);
  const [childGroupId, setChildGroupId] = useState(-1);
  const [startScore, setStartScore] = useState("");
  const [endScore, setEndScore] = useState("");
  const [year, setYear] = useState("");

  const { handleAddDiagnostics } = useDiagnostics();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddDiagnostics({
      categoryId,
      childId,
      childGroupId,
      startScore,
      endScore,
      year,
    });
    toggleActive(); // Закрыть форму после отправки
  };

  const { categoriesData } = useCategories();

  const { groupsData } = useGroups();

  return (
    <div>
      <Card
        className={`${s.form_container} ${isActive ? s.active : ""}`}
        onClick={toggleActive}
      ></Card>
      <Card
        color="transparent"
        shadow={false}
        className={`${s.form} ${isActive ? s.active : ""}`}
      >
        <Typography variant="h4" color="blue-gray">
          Добавление данных
        </Typography>
        <form
          className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <SelectionCategoryItem
              label={"Категория"}
              data={categoriesData}
              onChange={(id) => setCategoryId(id)}
            />

            <Input
              size="lg"
              label="ID Ребёнка"
              type="number"
              value={childId}
              onChange={(e) => setChildId(parseInt(e.target.value))}
              required
            />
            <Input
              size="lg"
              label="ID Группы"
              type="number"
              value={childGroupId}
              onChange={(e) => setChildGroupId(parseInt(e.target.value))}
              required
            />
            <Input
              size="lg"
              label="Начало года"
              type="number"
              value={startScore}
              onChange={(e) => setStartScore(e.target.value)}
              required
            />
            <Input
              size="lg"
              label="Конец года"
              type="number"
              value={endScore}
              onChange={(e) => setEndScore(e.target.value)}
              required
            />
            <Input
              size="lg"
              label="Год"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            Добавить
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default DiagnosticsForm;
