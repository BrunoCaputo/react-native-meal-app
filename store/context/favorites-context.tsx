import { PropsWithChildren, createContext, useState } from "react";
import { IFavoriteStore } from "../../models/favorites";

export const FavoritesContext = createContext<IFavoriteStore>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

function FavoritesContextProvider({ children }: PropsWithChildren<any>) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((curFavIds) => [...curFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((curFavIds) =>
      curFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value: IFavoriteStore = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
