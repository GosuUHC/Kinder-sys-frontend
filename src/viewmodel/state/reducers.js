import { diagnosticsReducer } from "./slices/diagnostics";
import { recommendationsReducer } from "./slices/recommendations";
import { statisticsReducer } from "./slices/statistics";
import { authReducer } from "./slices/auth";

const reducers = {
  diagnosticsReducer,
  recommendationsReducer,
  statisticsReducer,
  authReducer,
};

export default reducers;
