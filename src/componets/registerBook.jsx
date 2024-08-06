import React, {useState} from "react";
import addBook from "./addBook";


const registerBook = () => {
    const [input, setInput] = useState({});

    return (
        <>
    
        <form className="form">
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
                 name="pages" 
                 value={input.pages || ""} 
                 onChange={handleChange}/>
            
            Edition 
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />
            
            Publisher
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />

            Price
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />

            Editer
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />
            CoverDesigner
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />

            Format
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />

            ReleseDate
                <input type="text"
                 name="" 
                 value={input. || ""} 
                 onChange={handleChange}/> />

            <button type="submit" className="btn">Submit</button>
        </form>
        
        </>
    )
}

export default registerBook