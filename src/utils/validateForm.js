export function validateForm(sku, name, price, type, size, height, width, length, weight) {
    if (!sku || !name || !price || type==="default") return "Please, submit required data";
    if (isNaN(price)) return "Please, provide the data of indicated type";
    if (type === "dvd") {
        if (!size) return "Please, submit required data";
        if (isNaN(size)) return "Please, provide the data of indicated type";
    }
    if (type === "book") {
        if (!weight) return "Please, submit required data";
        if (isNaN(weight)) return "Please, provide the data of indicated type";
    }
    if (type === "furniture") {
        if (!height || !width || !length) return "Please, submit required data";
        if (isNaN(height) || isNaN(width) || isNaN()) return "Please, provide the data of indicated type";
    }
    return null;
}
