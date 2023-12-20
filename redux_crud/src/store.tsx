import { configureStore } from '@reduxjs/toolkit'
import animalReducer from './animalsSlice'

export const store = configureStore({
  reducer: {
    animals: animalReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch