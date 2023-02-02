import React, { useState } from 'react';
import StyledForm from "../components/styles/Form.styled";
import { validateForm } from '../utils/validateForm';

export default function Form() {
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("default");
    const [size, setSize] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [weight, setWeight] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        const err = validateForm(sku, name, price, type, size, height, width, length, weight);
        setError(err);
        if (err) return;
        console.log("submitting");

    }

    return (
        <StyledForm id="product_form" onSubmit={e => handleSubmit(e)}>
            <fieldset>
                <label htmlFor="sku">SKU</label>
                <input id="sku" type="text" value={sku} onChange={e=>{setSku(e.target.value)}} />
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={e=>{setName(e.target.value)}} />
                <label htmlFor="price">Price</label>
                <input id="price" type="text" value={price} onChange={e=>{setPrice(e.target.value)}} />
                <label htmlFor="productType">Type Switcher</label>
                <select id="productType" value={type} onChange={e=>{setType(e.target.value)}}>
                    <option value="default" disabled >Type Switcher</option>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture">Furniture</option>
                </select>
            </fieldset>
            { type === "dvd" && (
                <fieldset id="DVD">
                    <label htmlFor="size">Size (MB)</label>
                    <input id="size" type="text" value={size} onChange={e=>{setSize(e.target.value)}} />
                    <p>Please provide size in MB</p>
                </fieldset>
            )}
            { type === "furniture" && (
                <fieldset id="Furniture">
                    <label htmlFor="height">Height (CM)</label>
                    <input id="height" type="text" value={height} onChange={e=>{setHeight(e.target.value)}} />
                    <label htmlFor="width">Width (CM)</label>
                    <input id="width" type="text" value={width} onChange={e=>{setWidth(e.target.value)}} />
                    <label htmlFor="length">Length (CM)</label>
                    <input id="length" type="text" value={length} onChange={e=>{setLength(e.target.value)}} />
                    <p>Please provide dimensions in HxWxL format</p>
                </fieldset>
            )}
            { type === "book" && (
                <fieldset id="Book">
                    <label htmlFor="weight">Weight (KG)</label>
                    <input id="weight" type="text" value={weight} onChange={e=>{setWeight(e.target.value)}} />
                    <p>Please provide weight in Kilograms</p>
                </fieldset>
            )}
            { error && (
                <p className="error">{error}</p>
            )}
        </StyledForm>
    )
}
