import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector<any, string[]>(
    (state) => state.favoriteMeals.ids
  );

  const favorites = MEALS.filter((mealItem) =>
    // favoriteMealsCtx.ids.includes(mealItem.id);
    favoriteMealIds.includes(mealItem.id)
  );

  return (
    <MealsList
      items={favorites}
      emptyListText="You have no favorites meals yet."
    />
  );
}

export default FavoritesScreen;
