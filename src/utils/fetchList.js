export async function fetchList(setProducts) {
    const response = await fetch("http://localhost:8001");
    const data = await response.json();
    setProducts(data);
}
