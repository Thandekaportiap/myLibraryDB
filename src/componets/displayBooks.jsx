// this is is the Read function in the Crud operation

const displayBook = () => {
    const handleRead = () => {
        let localData = localStorage.getItem("booktable");
        let newList = localData ? JSON.parse(localData) : [];
      return (
        <ul>
          {newList.map(item => (
            <li key={item.isbm}><img src={item.coverDesigner} alt="" /></li>
          ))}
        </ul>
      );
      }
    return (
        <>
        
        </>
    )
}

export default displayBook;