import React, {useState} from "react";
import AddBook from "./addBook";


const registerBook = () => {
    const [input, setInput] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        <AddBook book={input}/>
      }
      

    return (
        <>
    
        <form className="form"  onSubmit={handleSubmit} >
            <h3>Add New Book Into Our DataBase</h3>

            ISBM 
                <input type="text"
                 name="isbm" 
                 value={input.isbm || ""} 
                 onChange={handleChange} />

            Title 
                <input type="text"
                 name="title" 
                 value={input.title || ""} 
                 onChange={handleChange} />
         
            Pages 
                <input type="text" 
                 name="no_of_pages" 
                 value={input.no_of_pages || ""} 
                 onChange={handleChange}/>
            
            Edition 
                <input type="text"
                 name="edition" 
                 value={input.edition || ""} 
                 onChange={handleChange}/> 
            
            Publisher
                <input type="text"
                 name="publisher" 
                 value={input.publisher || ""} 
                 onChange={handleChange}/> 

            Price
                <input type="text"
                 name="price" 
                 value={input.price || ""} 
                 onChange={handleChange}/> 

            Editer
                <input type="text"
                 name="editer" 
                 value={input.editer || ""} 
                 onChange={handleChange}/> 

            CoverDesigner
                <input type="text"
                 name="coverdesigner" 
                 value={input.coverdesigner || ""} 
                 onChange={handleChange}/>

            Format
                <input type="text"
                 name="format" 
                 value={input.format || ""} 
                 onChange={handleChange}/> 

            ReleseDate
                <input type="date"
                 name="relesedate" 
                 value={input.relesedate || ""} 
                 onChange={handleChange}/>

           <input type="submit" value="Submit" className="btn"/>
        </form>
        
        </>
    )
}

export default registerBook