import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootred from "./redux/reducers/Main";

const persistConfig = {
    key: 'persist-store',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootred)
const store = createStore(
    persistedReducer
);

export const persistor = persistStore(store)


export default store;