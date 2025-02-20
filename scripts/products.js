// step 1 - Access the elements where we have to display products
// step 2 - Fetch API to get product data
// step 3 - Display product data in the element

const productContainer = document.getElementById("productList");

// Fetch the product data
fetch("https://accurate-working-longship.glitch.me/db.json", {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => {
   
    const productData = data.products;
    productData.forEach(product => {
      productContainer.innerHTML += `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-main-text">${product.description}</p>
            <p class="card-text">Price - ${product.price}</p>
            <p class="card-text">Rating - ${product.rating}⭐</p>
            <p class="card-text">Discount - ${product.discount}</p>
            <button class="btn-primary">Add to Cart</button>
          </div>
        </div>`;
    });
  })
  .catch(error => console.error('Fetch error:', error));


productContainer.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('btn-primary')) {
    alert('Product added to cart');
  }
});
