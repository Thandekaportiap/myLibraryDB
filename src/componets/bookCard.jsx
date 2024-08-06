import React from "react";

const bookCard = ({book}) =>{
    console.log(book)

    return(
        <>
        <div style={{
        width:"20%",
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
        }}> <img src={book.coverDesigner} alt=""  className="image"/>  </div>

        <div style={{margin:"3%"}}>
            <span className="title">{book.title}</span>
        </div>
        <div style={{margin:"3%"}}>
            <span className="author">by {book.editer}</span>
        </div>
        <div style={{margin:"3%"}}>
            <span className="price">{book.price}</span>
        </div>
      </div>

        </>
    )

}

export default bookCard