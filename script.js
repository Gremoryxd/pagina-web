function sortProducts() {
    const container = document.querySelector('.product-grid');
    const products = Array.from(container.children);
    const sortValue = document.getElementById('sort').value;

    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').dataset.price);
        const priceB = parseFloat(b.querySelector('.price').dataset.price);
        const nameA = a.querySelector('p').textContent.trim();
        const nameB = b.querySelector('p').textContent.trim();

        if (sortValue === 'price-asc') return priceA - priceB;
        if (sortValue === 'price-desc') return priceB - priceA;
        if (sortValue === 'name-asc') return nameA.localeCompare(nameB);
        if (sortValue === 'name-desc') return nameB.localeCompare(nameA);
        return 0;
    });

    // Reordenar los productos en el contenedor
    products.forEach(product => container.appendChild(product));
}

