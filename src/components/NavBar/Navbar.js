import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'


const Navbar = () => {
    return (
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#libros">Libros</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <CartWidget/>   
            </ul>
        </nav>
    </header>
    )
}

export default Navbar

