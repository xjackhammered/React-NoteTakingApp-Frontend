import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import AllNotes from './AllNotes'
import mockNotes from './data.js'
import NoteDetails from './NoteDetails.jsx'

 
function App() {
  const [notes, setNotes] = useState(mockNotes)

  return (
    <>
      <div className="bg-blue-900 min-h-screen p-4">
        <Routes>
          <Route path="/" element={<AllNotes notes={notes} />}/>
          <Route path="/note/:id" element={<NoteDetails notes={notes} />}/>
          <Route path="/newnote" element={<NewNote setNotes={setNotes}/>}/>
        </Routes>
      </div>  
    </>
  )
}

export default App
