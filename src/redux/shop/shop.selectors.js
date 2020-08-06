import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.shop
);

export const selectShopData = createSelector([selectCollections], (shop) =>
  shop ? Object.keys(shop).map((key) => shop[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (collections) => {
    console.log(collections,"-----")
    return collections.find((collection) =>
      collection ? collection.routeName === collectionUrlParam : null
    );
  });

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);


export const collectionIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.shop
)