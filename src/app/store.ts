import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import casesReducer from '../features/cases/casesSlice';

export const store = configureStore({
  reducer: {
    cases: casesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
