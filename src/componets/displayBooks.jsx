// this is is the Read function in the Crud operation
import BookCard from "./bookCard";

const displayBook = ({bookList}) => {
    // const handleRead = () => {
    //     let localData = localStorage.getItem("booktable");
    //     let newList = localData ? JSON.parse(localData) : [];
    //   return (
      
    //   );
    //   }
    return (
        <>
     <div style={{
      display:"flex",
      
     }}>
     {bookList.map(item => (
            <BookCard key={item.isbm} book={item}/>
          ))}
     </div>
        </>
    )
}

export default displayBook;