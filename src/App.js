import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
const contenido = "Este es el contenido de mi App"
const estiloContenido = {fontSize: "50px", border: "1px solid #FFF"}




  return (
    <div className="App">
      <Navbar/>
      <p style={estiloContenido}>{contenido}</p>
      <ItemListContainer season= "Invierno" />
    </div>
  );
}

export default App;

