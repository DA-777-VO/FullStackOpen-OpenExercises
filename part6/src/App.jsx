import {useEffect} from "react";
import NewNote from "./components/NewNote.jsx";
import Notes from "./components/Notes.jsx";
import VisibilityFilter from "./components/VisibilityFilter";
import {initializeNotes} from './reducers/noteReducer'
import {useDispatch} from "react-redux";

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
  },[])

  return (
      <div>
        <NewNote/>
        <VisibilityFilter/>
        <Notes/>
      </div>
  )
}

export default App