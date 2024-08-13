import React, {useState} from "react";
import {addBook} from "./addBook";


const updateBook = ({book}) => {
    //console.log(book)
    console.log(book.isbm)
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        addBook(input)
      }
      
      const [isFormVisible, setIsFormVisible] = useState(false);

      const handleButtonClick = () => {
        setIsFormVisible(true);
      };
    
      const handleCloseForm = () => {
        setIsFormVisible(false);
      };

    return (
        <>
    <button  type="submit"
        style={{
          background: "Green",
          color: "white",
          padding: "12px 12px",
          borderRadius: "5px"
        }} onClick={handleButtonClick}>Show FormUpdate</button>
    {isFormVisible && (
        <form style={{
            marginLeft: "2%",
            marginTop: "2%",
            display: "flex",
            flexDirection: "column",
            height: "80%",
            width: "30%",
        }}  onSubmit={handleSubmit} >
            <h3>Update the existing Book Our DataBase</h3>

            ISBM 
                <input type="text"
                 name="isbm" 
                 value={input.isbm || book.isbm} 
                 onChange={handleChange} />

            Title 
                <input type="text"
                 name="title" 
                 value={input.title || book.title} 
                 onChange={handleChange} />
         
            Pages 
                <input type="text" 
                 name="no_of_pages" 
                 value={input.no_of_pages || book.no_of_pages} 
                 onChange={handleChange}/>
            
            Edition 
                <input type="text"
                 name="edition" 
                 value={input.edition || book.edition} 
                 onChange={handleChange}/> 
            
            Publisher
                <input type="text"
                 name="publisher" 
                 value={input.publisher || book.publisher} 
                 onChange={handleChange}/> 

            Price
                <input type="text"
                 name="price" 
                 value={input.price || book.price} 
                 onChange={handleChange}/> 

            Editer
                <input type="text"
                 name="editer" 
                 value={input.editer || book.editer } 
                 onChange={handleChange}/> 

            CoverDesigner
                <input type="text"
                 name="coverdesigner" 
                 value={input.coverdesigner || book.coverdesigner} 
                 onChange={handleChange}/>

            Format
                <input type="text"
                 name="format" 
                 value={input.format || input.format} 
                 onChange={handleChange}/> 

            ReleseDate
                <input type="date"
                 name="relesedate" 
                 value={input.relesedate || input.relesedate} 
                 onChange={handleChange}/>

<button onClick={handleCloseForm}>Close</button>
        </form>
    )}
        </>
    )
}

export default updateBook;