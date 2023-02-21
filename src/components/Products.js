import StyledProducts from "../components/styles/Products.styled";

export default function Products({products, setProductsToDelete}) {
    const handleClick = (e, sku) => {
        if (e.target.checked) {
            setProductsToDelete(prev => {
                let updated = [...prev, sku];
                return updated;
            });
        } else {
            setProductsToDelete(prev => {
                let index = prev.indexOf(sku);
                let updated = [...prev];
                updated.splice(index, 1);
                return updated;
            });
        }
    }

    return (
        <StyledProducts >
            { products.map(product => {
                return (
                    <div key={product.sku} >
                        <input type="checkbox" className="delete-checkbox" name={product.sku} onClick={e => handleClick(e, product.sku)} />
                        <p>{product.sku}</p>
                        <p>{product.name}</p>
                        <p>{product.price} $</p>
                        <p>{product.attribute}</p>
                    </div>
                )
            }) }
        </StyledProducts >
    )
}
