import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
