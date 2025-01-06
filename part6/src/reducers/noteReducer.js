import { createSlice} from '@reduxjs/toolkit'
import noteService from '../services/notes'



const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const id = action.payload.id
      return state.map(note => note.id === id ? action.payload : note )
    },

    appendNote(state, action) {
      state.push(action.payload)
    },

    setNotes(state, action) {
      return action.payload
    }

  }
})


export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = content => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch(appendNote(newNote))
  }
}

export const updateNote = note => {
  return async dispatch => {
    const updatedNote = await noteService.importanceUpdate(note.id, {...note, important: !note.important})
    dispatch(toggleImportanceOf(updatedNote))
  }
}

export default noteSlice.reducer