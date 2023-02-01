import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/styles/Header.styled";
import Button from "../components/styles/Button.styled";
import Form from "../components/Form";

export default function Add() {
    return (
        <>
            <Header>
                <h1>Product Add</h1>
                <div>
                    <Button form="product_form" type="submit">Save</Button>
                    <Button as={Link} to="/">Cancel</Button>
                </div>
            </Header>
            <Form />
        </>
    );
}
