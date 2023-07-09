import { configureStore } from "@reduxjs/toolkit";
import newClientState from "./slice/newClientSlice";

const store = configureStore({
  reducer: {
    newClient: newClientState,
  },
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({});
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
