import { createSelector } from "reselect";

const MAP_TO_ARRAY = {
  hats: 1,
  jackets: 3,
  mens: 5,
  sneakers: 2,
  womens: 4,
};

const selectShop = (state) => state.shop;

export const selectShopData = createSelector([selectShop], (shop) =>
  Object.keys(shop).map((key) => shop[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (collections) =>
    collections.find(
      (collection) => collection.id === MAP_TO_ARRAY[collectionUrlParam]
    )
  );
