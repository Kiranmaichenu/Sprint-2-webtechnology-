document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    // Function to fetch product data from the server
    const fetchProducts = async (category) => {
        try {
            const response = await fetch(`https://api.shopperstop.com/products/${category}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching product data:', error);
            throw error;
        }
    };

    // Function to render products in the specified container
    const renderProducts = (products) => {
        productsContainer.innerHTML = ''; // Clear previous content

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    };

    // Event listener for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            const category = event.target.getAttribute('href').substring(1); // Remove the '#' symbol
            try {
                const products = await fetchProducts(category);
                renderProducts(products);
            } catch (error) {
                // Handle error (display a message, retry, etc.)
            }
        });
    });

    // Initial load - assuming a default category or the first category
    const defaultCategory = 'home-appliances';
    fetchProducts(defaultCategory)
        .then(products => renderProducts(products))
        .catch(error => console.error('Initial product load error:', error));
});
