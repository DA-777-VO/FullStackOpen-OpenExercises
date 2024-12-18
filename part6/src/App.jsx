import NewNote from "./components/NewNote.jsx";
import Notes from "./components/Notes.jsx";
import VisibilityFilter from "./components/VisibilityFilter";

const App = () => {

  return (
      <div>
        <NewNote/>
        <VisibilityFilter/>
        <Notes/>
      </div>
  )
}

export default App