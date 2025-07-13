import {Link} from 'react-router-dom'

export default function AllNotes({ notes }) {
  return (
    <>
      <h1 className="font-bold text-white text-2xl text-center">All Notes</h1>
      {notes.map(note => (
        <div
          key={note.id}
          className="bg-blue-100 text-center border-2 max-w-2xl mx-auto mt-4 p-4 rounded-lg"
        >
          <h1 className="font-bold">{note.title}</h1>
          <small>{new Date(note.created_at).toLocaleString()}</small>
          <p>Tags: {note.tags.join(', ')}</p>
          <Link className="text-blue-700 hover:underline" to={`/note/${note.id}`}>
            View Details
          </Link>
          <hr className="mt-3" />
        </div>
      ))}
      <Link className="block mt-6 text-blue-300 hover:underline" to={'/newnote'}>
        Add new Note
      </Link>
    </>
  )
}
