// This component create function in the CRUD operationd
import React from "react";

console.log("this is from addbook")
export const addBook = (book) => {
    // console.log(book)

    let myBooks = JSON.parse(localStorage.getItem("booktable"))
    // console.log(myBooks)
    myBooks.push(book)
    // console.log()
    localStorage.setItem("booktable" , JSON.stringify(myBooks))


   
}

