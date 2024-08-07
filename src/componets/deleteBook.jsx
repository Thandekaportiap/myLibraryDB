// this is the delete function in CRUD operation
import {useState} from "react"

const deleteBook = ({isbm}) =>{
    const [filtedList, setFiltedList] = useState("")
    
    let localData = JSON.parse(localStorage.getItem("booktable"));

    const handleDelete = () => {

    }

    return(
        <>
        <button type="submit" style={{
            background:"red",
            color:"white",
            padding:"12px 12px",
            borderRadius:"5px",
        }} onClick={handleDelete} >Delete</button>
        </>
    )
}

export default deleteBook;