window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
      const product = getProductById(productId);
      
      if (product) {
        const productNameElement = document.getElementById('productName');
        const productDescriptionElement = document.getElementById('productDescription');
        const productShort_DescriptionElement = document.getElementById('productShort_description');
        const productShould_be_usee_forElement = document.getElementById('productShould_be_used_for');
        const productSuitable_forElement = document.getElementById('productSuitable_for');
        const productBrandElement = document.getElementById('productBrand');
        const productSaleElement = document.getElementById('productSale');
        const productImageElement = document.getElementById('productImage');
        const relatedProductsElement = document.getElementById('relatedProducts');

        
        // Show product details
        productNameElement.textContent = product.name;
        productDescriptionElement.textContent = product.description;
        productShort_DescriptionElement.textContent = product.short_description;
        productShould_be_usee_forElement.textContent = product.Should_be_used_for;
        productSuitable_forElement.textContent = product.Suitable_for;
        productBrandElement.textContent = product.brand;
        productSaleElement.textContent = `$${product.sale}`;
        productImageElement.src = product.images;
        
        // Get the category of the current product
        const currentCategory = product.categories[0];
        
        //Filter out products of the same category from the product list
        const relatedProducts = getRelatedProductsByCategory(currentCategory);
        
        // Generate HTML for products of the same category
        const relatedProductsHTML = relatedProducts.map(relatedProduct => createProductHTML(relatedProduct)).join('');
        
        //Add HTML to the relatedProducts area in the HTML file
        relatedProductsElement.innerHTML = relatedProductsHTML;
      }
    }
  });
  
  function getRelatedProductsByCategory(category) {
    return window.listProducts.filter(product => product.categories.includes(category));
  }
  
  function createProductHTML(product) {
    return `
    <li>
    <div class="product-item">
      <div class="product-top">
        <a href="product_detail.html?id=${product.id}" class="product-thumb">
          <img src="${product.images}" alt="">
        </a>
        <a href="product_detail.html?id=${product.id}" class="buy-now">Buy now</a>
      </div>
      <div class="product-info">
        <a href="product_detail.html?id=${product.id}" class="product-name">${product.name}</a>
        <div class="product-price">
          <span>$${product.price}</span> &emsp; $${product.sale}
        </div>
        <div class="product-short-description">
          ${product.short_description}
        </div>
      </div>
    </div>
  </li>
    `;
  }
  
  function getProductById(productId) {
    return window.listProducts.find(product => product.id === parseInt(productId)) || null;
  }
  
