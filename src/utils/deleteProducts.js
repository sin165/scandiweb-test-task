export async function deleteProducts(productsToDelete) {
    let formData = new URLSearchParams();

    productsToDelete.forEach(sku => {
        formData.append('delete[]', sku);
    });

    try {
        const response = await fetch(process.env.REACT_APP_BACKEND, {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: formData,
        });
        const data = await response.json();
        return data;
    } catch {
        return {error: ['failed to fetch']};
    }
}
