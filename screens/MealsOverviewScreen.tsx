import { CATEGORIES, MEALS } from "../data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CustomRootParamList } from "../types/navigation-param-list.type";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({
  route,
  navigation,
}: NativeStackScreenProps<CustomRootParamList, "MealsOverview">) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
