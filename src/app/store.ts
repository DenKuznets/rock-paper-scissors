import scoreTabReducer from "../components/ScoreTab/scoreTabSlice";
import choiceReducer from "../components/Choice/choiceSlice";
import {
    combineReducers,
    configureStore,
    PreloadedState,
} from "@reduxjs/toolkit";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
    scoreTab: scoreTabReducer,
    choice: choiceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];