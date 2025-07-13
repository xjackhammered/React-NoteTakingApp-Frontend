import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'


export default function NewNote({setNotes}){
    const navigate = useNavigate()
    
    function handleSubmit(event) {
        

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const title = formData.get("title")
        const content = formData.get("content")
        const tagInput = formData.get("tag") || ""

        const tags = tagInput.split(',').map(t => t.trim()).filter(t => t.length > 0)

        const newNote = {
            id: uuidv4(),
            title,
            content,
            tags,
            created_at: new Date().toISOString()
        }

        setNotes(prev => [...prev, newNote])
        navigate("/")

    }


  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" name="title" required />

      <label>Content</label>
      <input type="text" name="content" required />

      <label>Tag</label>
      <input type="text" name="tag" />

      <button type="submit">Submit</button>
    </form>
  )
}
