import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const persistConfig = {
  key: "portfolio",
  storage,
  blacklist: ["option", "spinner"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [logger];
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...middleWares);
  },
});

const persistor = persistStore(store);

export { store, persistor };
