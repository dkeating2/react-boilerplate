import { configureStore } from "@reduxjs/toolkit";
import triviaReducer from "./reducers/triviaReducer/triviaReducer.ts";

const reducer = { trivia: triviaReducer };
export const store = configureStore({
  reducer,
});

export const setupStore = (preloadedState = {}) =>
  configureStore({ reducer, preloadedState });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
