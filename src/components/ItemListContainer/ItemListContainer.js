import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({season})=> {
    return (
        <>
            <h1>Bienvenido a Todo Libros en {season}</h1>
           
            <section>
                <ItemCount stock="5" initial="1" />
            </section>
        </>
        
    )
}

export default ItemListContainer;