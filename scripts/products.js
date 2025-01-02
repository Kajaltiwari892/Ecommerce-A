// step 1 - Access the elements where we have to display products
// step 2 - Fetch API to get product data
// step 3 - Display product data in the element

// step 1
const productContainer = document.getElementById("product-list");
let product =[]
//step 2 
fetch("http://localhost:3000/products",{
    method:'GET',
    headers:{'Content-Type':'application/json'

    }
}).then((response)=>{return response.json()} )
.then((data)=>{
    productData = data ;
    productData.forEach((product)=>{
        productContainer.innerHTML += `
         <div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.password}</p>
                    <p class="card-text">Price - ${product.price}</p>
                    <p class="card-text">Rating - ${product.rating}</p>
                    <p class="card-text">Discount - ${product.discount}</p>
                    <Button class="btn-primary">Add to Cart</Button>
                </div>
            </div>`
    })
})

let btn = document.documentElement.querySelector('.btn-primary')
btn.addEventListener('click',(e)=>{
    console.log(e.target)
    alert('Product added to cart')
})