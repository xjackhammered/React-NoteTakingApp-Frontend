import {useParams, Link} from 'react-router-dom'


export default function NoteDetails( {notes} ){

    const { id } = useParams()
    const note = notes.find(note => note.id === Number(id));
    if (!note) return <p>Note not found!</p>

    return (
        <>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            {note.tags.map(tag =>(
                <div>
                    <p>{tag}</p>
                </div>
            ))}
        </>
    )
}