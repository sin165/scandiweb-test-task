import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/styles/Header.styled";
import Button from "../components/styles/Button.styled";
import Products from "../components/Products";
import { deleteProducts } from "../utils/deleteProducts";

export default function List({products, setProducts}) {
    const [productsToDelete, setProductsToDelete] = useState([]);

    const handleMassDelete = async () => {
        if (!productsToDelete.length) return;
        const data = await deleteProducts(productsToDelete);
        if(data.error) {
            console.log('error: ', data.error);
            return;
        }
        setProductsToDelete([]);
        setProducts(data);
    }

    return (
        <>
            <Header>
                <h1>Product List</h1>
                <div>
                    <Button as={Link} to="/addproduct">ADD</Button>
                    <Button className="delete-product-btn" onClick={handleMassDelete} >MASS DELETE</Button>
                </div>
            </Header>
            { products && <Products products={products} setProductsToDelete={setProductsToDelete} />}
        </>
    );
}
