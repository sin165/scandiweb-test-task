export function validateForm(sku, name, price, type, size, height, width, length, weight) {
    if (!sku || !name || !price || type==="default") return "Please, submit required data";
    if (isNaN(price) || price<0) return "Please, provide the data of indicated type";
    if (type === "dvd") {
        if (!size) return "Please, submit required data";
        if (isNaN(size) || size<0) return "Please, provide the data of indicated type";
    }
    if (type === "book") {
        if (!weight) return "Please, submit required data";
        if (isNaN(weight) || weight<0) return "Please, provide the data of indicated type";
    }
    if (type === "furniture") {
        if (!height || !width || !length) return "Please, submit required data";
        if (isNaN(height) || isNaN(width) || isNaN(length) || height<0 || width<0 || length<0) return "Please, provide the data of indicated type";
    }
    return null;
}
