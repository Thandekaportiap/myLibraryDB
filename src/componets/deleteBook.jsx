import { useState, useEffect } from "react";

const deleteBook = ({ isbm }) => {
   // console.log(isbm)
  const [filtedList, setFiltedList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("booktable"));
    setFiltedList(storedData || []);
  }, []);

  const handleDelete = () => {
    
    const filteredData = filtedList.filter(item => item.isbm !== isbm);
    setFiltedList(filteredData);
    // console.log(filteredData)
    localStorage.setItem('booktable', JSON.stringify(filteredData));
    alert("deleted successfully")
  };

  return (
    <>
      <button
        type="submit"
        style={{
          background: "red",
          color: "white",
          padding: "12px 12px",
          borderRadius: "5px"
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default deleteBook