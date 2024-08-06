import AddBook from './componets/addBook';
import DisplayBook from './componets/displayBooks';
import DeleteBook from './componets/deleteBook';
import './App.css'
import UpdateBook from './componets/updateBook';
import RegisterBook from './componets/registerBook';
import BookCard from './componets/bookCard';
function App() {

  let bookTable = [
  
    {
    isbm:	979,
    title: "Baby Driver",
     no_of_pages: 1240,
     edition: "1st edition",
     publisher: "Micca Books",
     coverDesigner:"https://cdn.mos.cms.futurecdn.net/ipDhfaAKHg8brZdjNSpDYZ.jpg",
     price: "R700",
     editer: "Onezwa Dlamin",
     format: "PDF",
     relesedate: "17-Aug-10",
    },
    {
      
      isbm:	985,
       title: "Beekeeper",
       no_of_pages: 720,
       edition: "1st edition",
       publisher: "Marvel",
       coverDesigner: "https://play-lh.googleusercontent.com/Dtfka3mQ4VHJdNiC40HuFduIoEaImw2w27CRZp918dXYVUbSFIRd4KoBurzGa9VdCMLBwIQikco6Inp_tsc",
       price: "R500",
       editer: "Lawson Tadai",
       format: "PDF",
       relesedate: "13-Jun-19"
      },
      {
        isbm:	799,
         title: "The Room",
         no_of_pages: 512,
         edition: "1st edition",
         publisher: "AW Books",
         coverDesigner: "https://images.justwatch.com/poster/304906087/s592/the-room",
         price: "R430",
         editer: "Ntai Kgomotso",
         format: "PDF",
         relesedate: "30-May-20",
        }
  ]

  
  // localStorage.setItem("booktable" , JSON.stringify(bookTable))

  return (
    <>
    <AddBook book={bookTable[0]}/>
    <DisplayBook/>
    <DeleteBook />
    <UpdateBook/>
    <BookCard book={bookTable[0]} />
    <RegisterBook/>
      
    </>
  )
}

export default App
