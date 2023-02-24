export async function fetchList(setProducts) {
    const response = await fetch(process.env.REACT_APP_BACKEND);
    const data = await response.json();
    setProducts(data);
}
