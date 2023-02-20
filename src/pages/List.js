import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/styles/Header.styled";
import Button from "../components/styles/Button.styled";
import Products from "../components/Products";

export default function List({products}) {
    return (
        <>
            <Header>
                <h1>Product List</h1>
                <div>
                    <Button as={Link} to="/addproduct">Add</Button>
                    <Button className="delete-product-btn">Mass Delete</Button>
                </div>
            </Header>
            { products && <Products products={products} />}
        </>
    );
}
