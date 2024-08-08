import React from "react";
import DeleteBook from "./deleteBook"

const bookCard = ({book}) =>{
   // console.log(book.isbm)

    return(
        <>
        <div style={{
        width:"65%",
        height: "70vh",
        borderRadius: "3%",
        boxShadow: "0 4px 8px 4px grey",
        background: "white",
      }}>
        <div className="firstDiv" style={{
             width:"100%",
             height: "40%",
             borderRadius: "6px 6px 0 0",
             display:"flex", 
             justifyContent:"center",
             
             padding: " 4%  0 4% 0" ,   
        }}> <img src={book.coverDesigner} alt=""  style={{
            width: "60%",
            borderRadius: "2%",
            boxShadow: "0 0 3px  3px rgb(84, 110, 41)",
        }}/>  </div>

        <div style={{margin:"3%"}}>
            <span style={{
                fontSize: "xx-large",
                lineHeight: "3rem",
                fontWeight: "400",
                padding: "2%",
            }}>{book.title}</span>
        </div>
        <div style={{margin:"3%"}}>
            <span style={{
                fontSize: "x-large",
                lineHeight: "3rem",
                fontWeight: "400",
                padding: "2%",
            }}>by {book.editer}</span>
        </div>
        <div style={{margin:"3%"}}>
            <span className="price">{book.price}</span>
        </div>
        <DeleteBook isbm={book.isbm} />
      </div>

        </>
    )

}

export default bookCard