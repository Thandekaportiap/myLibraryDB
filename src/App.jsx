import addBook from './componets/addBook';
import displayBook from './componets/displayBooks';
import deleteBook from './componets/deleteBook';
import './App.css'
import updateBook from './componets/updateBook';
import registerBook from './componets/registerBook';
function App() {
 

  return (
    <>
    <addBook />
    <displayBook/>
    <deleteBook />
    <updateBook/>
    <registerBook/>
      
    </>
  )
}

export default App
