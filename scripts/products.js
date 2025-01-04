// step 1 - Access the elements where we have to display products
// step 2 - Fetch API to get product data
// step 3 - Display product data in the element

const productContainer = document.getElementById("productList");

// Fetch the product data
fetch("http://localhost:3000/products", {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => {
    productData = data;
    productData.forEach(product => {
      productContainer.innerHTML += `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-main-text">${product.description}</p>
            <p class="card-text">Price - ${product.price}</p>
            <p class="card-text">Rating - ${product.rating}⭐</p>
            <p class="card-text">Discount - ${product.discount}</p>
            <button class="btn-primary" id="btn-primary">Add to Cart</button>
          </div>
        </div>`;
    });
  });

// Use event delegation for dynamically added buttons
productContainer.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('btn-primary')) {
    alert('Product added to cart');
  }
});
