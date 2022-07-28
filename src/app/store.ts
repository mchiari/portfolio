import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";

export const store = configureStore({
	reducer: {
        skills: skillsSlice,
    },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
