export async function submitForm(sku, name, price, type, size, height, width, length, weight) {
    let formData = new URLSearchParams();

    formData.append('sku', sku);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('type', type);
    if (type==='dvd') formData.append('size', size);
    if (type==='book') formData.append('weight', weight);
    if (type==='furniture') {
        formData.append('height', height);
        formData.append('width', width);
        formData.append('length', length);
    }

    const response = await fetch("http://localhost:8001", {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: formData,
    });
    console.log(response);
    const data = await response.json();
    console.log('data', data);
}
