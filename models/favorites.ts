export interface IFavoriteStore {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}
