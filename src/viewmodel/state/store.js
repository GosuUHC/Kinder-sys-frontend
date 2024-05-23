import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "../../transport/api";
import reducers from "./reducers";

export const store = configureStore({
  reducer: {
    diagnostics: reducers.diagnosticsReducer,
    recommendations: reducers.recommendationsReducer,
    statistics: reducers.statisticsReducer,
    auth: reducers.authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
