// This component create function in the CRUD operationd
import React from "react";

const addBook = ({book}) => {
    console.log(book)

    let myBooks = JSON.parse(localStorage.getItem("booktable"))
    console.log(myBooks)
    myBooks.push(book)
    console.log()

    localStorage.setItem("booktable" , JSON.stringify(myBooks))

    return(
        <>
        </>
    )
}

export default addBook