import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favorites = MEALS.filter((mealItem) => {
    return favoriteMealsCtx.ids.includes(mealItem.id);
  });

  return (
    <MealsList
      items={favorites}
      emptyListText="You have no favorites meals yet."
    />
  );
}

export default FavoritesScreen;
