import { configureStore } from "@reduxjs/toolkit";
import scoreTabReducer from "../components/ScoreTab/scoreTabSlice";
import choiceReducer from "../components/Choice/choiceSlice";

export const store = configureStore({
    reducer: { scoreTab: scoreTabReducer, choice: choiceReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
