// Sample JavaScript for loading product listings
document.addEventListener('DOMContentLoaded', () => {
    // You can fetch product data from an API and dynamically populate the sections
    // Here, I'm just providing a simple example

    const products = [
        { category: 'home-appliances', name: 'Smart Refrigerator', price: '$599.99' },
        { category: 'women-clothing', name: 'Summer Dress', price: '$39.99' },
        { category: 'men-clothing', name: 'Casual Shirt', price: '$29.99' },
        { category: 'gifts', name: 'Customized Mug', price: '$12.99' },
    ];

    products.forEach(product => {
        const section = document.getElementById(product.category);
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        section.appendChild(productElement);
    });
});
