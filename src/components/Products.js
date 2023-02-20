import StyledProducts from "../components/styles/Products.styled";

export default function Products({products}) {
    return (
        <StyledProducts >
            { products.map(product => {
                return (
                    <div key={product.sku} >
                        <input type="checkbox" className="delete-checkbox" name={product.sku} />
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
