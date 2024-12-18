
const noteReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]
    case 'TOGGLE_IMPORTANCE' : {
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const chengedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note => note.id !== id ? note : chengedNote)
    }
    default:
      return state
  }
}


const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}




// const store = createStore(noteReducer)
//
// store.dispatch({
//   type: 'NEW_NOTE',
//   payload: {
//     content: 'the app state is in redux store',
//     important: true,
//     id: 1
//   }
// })
//
// store.dispatch({
//   type: 'NEW_NOTE',
//   payload: {
//     content: 'state changes are made with actions',
//     important: false,
//     id: 2
//   }
// })

export default noteReducer