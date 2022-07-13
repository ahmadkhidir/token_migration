import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import carouselReducer from '../features/Carousel/carouselSlice'

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
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
