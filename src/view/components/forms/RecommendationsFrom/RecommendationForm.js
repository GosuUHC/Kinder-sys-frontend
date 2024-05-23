import React, { useState } from "react";
import { Card, Textarea, Button, Typography } from "@material-tailwind/react";
import s from "../From.module.scss";
import useRecommendations from "../../../../viewmodel/hooks/recommendations/useRecommendations";
import SelectionCategoryItem from "../../selection/selectionItem/SelectionCategoryItem";
import useCategories from "../../../../viewmodel/hooks/categories/useCategories";

export const RecommendationForm = ({ isactive, toggleactive }) => {
  const [categoryId, setCategoryId] = useState(0);
  const [highScoreRecommendation, setHighScoreRecommendation] = useState("");
  const [middleScoreRecommendation, setMiddleScoreRecommendation] =
    useState("");
  const [lowScoreRecommendation, setLowScoreRecommendation] = useState("");

  const { categoriesData } = useCategories();

  const { handleAddRecommendation } = useRecommendations();

  const onAdd = () => {
    console.log({
      categoryId,
      highScoreRecommendation,
      middleScoreRecommendation,
      lowScoreRecommendation,
    });
    handleAddRecommendation({
      categoryId,
      highScoreRecommendation,
      middleScoreRecommendation,
      lowScoreRecommendation,
    });
    toggleactive();
  };

  return (
    <div>
      <Card
        className={`${s.form_container} ${isactive ? s.active : ""}`}
        onClick={toggleactive}
      ></Card>
      <Card
        color="transparent"
        shadow={false}
        className={`${s.form} ${isactive ? s.active : ""}`}
      >
        <Typography variant="h4" color="blue-gray">
          Добавление рекомендации
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Введите рекомендацию для категории
        </Typography>
        <SelectionCategoryItem
          label={"Категория"}
          data={categoriesData}
          onChange={(id) => setCategoryId(id)}
        />

        <form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Рекомендация для высокого уровня
            </Typography>
            <Textarea
              onChange={(e) => setHighScoreRecommendation(e.target.value)}
              size="lg"
              placeholder="Рекомендация"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Рекомендация для среднего уровня
            </Typography>
            <Textarea
              onChange={(e) => setMiddleScoreRecommendation(e.target.value)}
              size="lg"
              placeholder="Рекомендация"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Рекомендация для низкого уровня
            </Typography>
            <Textarea
              onChange={(e) => setLowScoreRecommendation(e.target.value)}
              size="lg"
              placeholder="Рекомендация"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button onClick={onAdd} className="mt-6" fullWidth>
            Добавить
          </Button>
        </form>
      </Card>
    </div>
  );
};
