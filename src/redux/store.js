import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./coursesApi";
import authReducer from  "./auth/reducer";
import progressReducer from "./video/reducer";

export const store = configureStore ({
    reducer: {
        [coursesApi.reducerPath]: coursesApi.reducer,
        auth: authReducer,
        progress: progressReducer,        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware)
});

