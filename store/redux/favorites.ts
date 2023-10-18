import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFavoritesState {
  ids: string[];
}

type TFavoritesReducers = {
  addFavorite: (state: IFavoritesState, action: PayloadAction<any>) => void;
  removeFavorite: (state: IFavoritesState, action: PayloadAction<any>) => void;
};

const favoritesSlice = createSlice<IFavoritesState, TFavoritesReducers, string>(
  {
    name: "favorites",
    initialState: {
      ids: [],
    },
    reducers: {
      addFavorite: (state, action) => {
        state.ids.push(action.payload.id);
      },
      removeFavorite: (state, action) => {
        state.ids.splice(state.ids.indexOf(action.payload.id), 1);
      },
    },
  }
);

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
