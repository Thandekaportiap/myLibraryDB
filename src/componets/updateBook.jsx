// this is the Update function in the CRUD operation
import { useEffect, useState } from "react"

const updateBook = ({isbm}) =>{

    const handleUpdate = () => {
        
        alert("Delete Successfully!")
    }

    return(
        <>
        <button type="submit" style={{
            background:"green",
            color:"white",
            padding:"12px 12px",
            borderRadius:"5px",
            marginLeft:"8%"
        }} onClick ={handleUpdate}>Update</button>
        </>
    )
}

export default updateBook