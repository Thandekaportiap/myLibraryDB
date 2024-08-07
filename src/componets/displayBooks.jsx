// this is is the Read function in the Crud operation
import BookCard from "./bookCard";

const displayBook = () => {
    const handleRead = () => {
        let localData = localStorage.getItem("booktable");
        let newList = localData ? JSON.parse(localData) : [];
      return (
        <ul>
          {newList.map(item => (
            <li key={item.isbm}>{item.title}</li>
          ))}
        </ul>
      );
      }
    return (
        <>
     {handleRead()}
        </>
    )
}

export default displayBook;