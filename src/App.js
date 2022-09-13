import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return(
      <header>
        <NavBar/>
        <ItemDetailContainer/>
      </header>
  )
}

export default App;
