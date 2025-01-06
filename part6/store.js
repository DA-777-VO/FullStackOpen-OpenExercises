import { configureStore } from '@reduxjs/toolkit'

import noteReducer from './src/reducers/noteReducer.js'
import filterReducer from './src/reducers/filterReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

export default store