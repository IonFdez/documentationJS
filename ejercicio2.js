/**
 * Returns details of a product as a formatted string.
 *
 * @param {Object} product - The product object.
 * @param {string} product.name - The name of the product.
 * @param {number} product.price - The price of the product.
 * @param {string[]} product.tags - A list of tags associated with the product.
 * @returns {string} A string containing the product's name, price, and tags.
 */
function getProductDetails(product) {
    return `Product Name: ${product.name}\nPrice: $${product.price}\nTags: ${product.tags.join(", ")}`;
}