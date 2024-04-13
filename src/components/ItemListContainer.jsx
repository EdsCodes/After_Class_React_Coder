const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h2 className="colorTituloPrincipal">{mensaje}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;