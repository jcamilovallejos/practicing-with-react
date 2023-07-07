import { useRef, useState } from "react"

const Uncontrolled = () => {


    const form = useRef(null)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const data = new FormData(form.current)
        const { title, description, status } = Object.fromEntries([...data.entries()])

        //Validate data
        if(!title.trim()) return setError('Fill the title')
        if(!description.trim()) return setError('Fill the description')
        if(!status) return setError('Fill the status')
        //Send data to server
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input 
                type="text" 
                placeholder="Type todo" 
                className="form-control mb-2" 
                name="title" 
                defaultValue={'todo #01'}
            />
            <textarea 
                placeholder="Type todo" 
                className="form-control mb-2" 
                name="description"
                defaultValue={'todo #01 description'}
            >
            </textarea>
            <select 
                className="form-control form-select mb-2" 
                name="status"
                defaultValue={'outstanding'}
            >
                <option value="outstanding">Outstanding</option>
                <option value="completed">Completed</option>
            </select>
            <button 
                className="btn btn-sm btn-success" 
                type="submit"
            >
                Send
            </button>
            {error !== '' && (
                <p>{error}</p>
            )}
        </form>
    )
}
export default Uncontrolled