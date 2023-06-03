// Show all product


function displayProducts(targetId) {
    const target = document.querySelector(`#${targetId}`);
    const products = window.listProducts;
    const htmlString = products.map(o => `
    <li>
        <div class="product-item">
          <div class="product-top">
            <a href="product_detail.html?id=${o.id}" class="product-thumb">
              <img src="${o.images}" alt="">
            </a>
            <a href="product_detail.html?id=${o.id}" class="buy-now">Buy now</a>
          </div>
          <div class="product-info">

            <a href="product_detail.html?id=${o.id}" class="product-name">${o.name}</a>
            <div class="product-price"><span>$${o.price}</span> &emsp; $${o.sale}</div>
            <div class="product-short-description">
              ${o.short_description}
            </div>
          </div>
        </div>
      </li>
    `);
    target.innerHTML = htmlString.join('');
  }
  

  displayProducts('listProduct');


// filter


let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');


    let productFilter = window.listProducts;


    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = window.listProducts.filter(item => {
            // check category
            if(valueFilter.categories.value != ''){
                if(!item.categories.includes(valueFilter.categories.value)){
                    return false;
                }
            }
            // check brand
            if(valueFilter.brand.value != ''){
                if(!item.brand.includes(valueFilter.brand.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.sale < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.sale > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })


    function showProduct(productFilter){
        count.innerText = productFilter.length;

        const target = document.querySelector('#listProduct');
        const htmlString = productFilter.map(item => `
        <li>
        <div class="product-item">
          <div class="product-top">
            <a href="product_detail.html?id=${item.id}" class="product-thumb">
              <img src="${item.images}" alt="">
            </a>
            <a href="product_detail.html?id=${item.id}" class="buy-now">Buy now</a>
          </div>
          <div class="product-info">

            <a href="product_detail.html?id=${item.id}" class="product-name">${item.name}</a>
            <div class="product-price"><span>$${item.price}</span> &emsp; $${item.sale}</div>
            <div class="product-short-description">
              ${item.short_description}
            </div>
          </div>
        </div>
      </li>
    `);
    target.innerHTML = htmlString.join('');
    }
