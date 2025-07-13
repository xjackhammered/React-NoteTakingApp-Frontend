import { Link } from 'react-router-dom'


export default function AllNotes({notes}){
    return (
        <>
            <h1 className="font-bold text-white text-2xl text-center">All Notes</h1>
            {notes.map(note =>(
                <div className="bg-blue-100 text-center border-2 w-2xl mx-auto mt-4" key={note.id}>
                    <h1 className="font-bold">{note.title}</h1>
                    <small>{note.created_at}</small><br></br>
                    <Link to={`/note/${note.id}`}>View Details</Link>
                    <hr></hr>
                </div>
            ))}
        </>
    )
}