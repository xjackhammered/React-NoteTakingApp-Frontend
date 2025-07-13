import { useParams } from 'react-router-dom'


export default function NoteDetails({ notes }) {
  const { id } = useParams()
  const note = notes.find(note => note.id === (isNaN(id) ? id : Number(id)))
  if (!note) return <p>Note not found!</p>

  return (
    <>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <div className="mt-4">
        {note.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-300 px-2 py-1 mr-2 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}
