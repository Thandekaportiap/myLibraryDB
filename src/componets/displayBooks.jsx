// this is is the Read function in the Crud operation
import BookCard from "./bookCard";

const displayBook = ({bookList}) => {
   
    return (
        <>
     <div style={{
      display:"flex",
      marginLeft: "2%",
     }}>
     {bookList.map(item => (
            <BookCard key={item.isbm} book={item}/>
          ))}
     </div>
        </>
    )
}

export default displayBook;