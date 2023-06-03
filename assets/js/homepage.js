function getProductByCate(_cate) {
	return window.listProducts.filter(o => Array.isArray(o.categories) && o.categories.includes(_cate));
}


function displayProducts(category, targetId) {
  const target = document.querySelector(`#${targetId}`);
  const products = getProductByCate(category);
  const limitedProducts = products.slice(0, 4); // Chỉ lấy 4 sản phẩm đầu tiên
  const htmlString = limitedProducts.map(o => `
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

  

  displayProducts('Mugs', 'listMugsProduct');

  // Hiển thị sản phẩm có danh mục "gifts" trong phần tử có ID "listGiftProduct"
  displayProducts('Cards', 'listCardsProduct');
  
  // Hiển thị sản phẩm có danh mục "cards" trong phần tử có ID "listCardsProduct"
  displayProducts('Bracelets', 'listBraceletsProduct');




















  // document.addEventListener('DOMContentLoaded', () => {
  //   const categoryLinks = document.querySelectorAll('.category-link');
  //   categoryLinks.forEach(link => {
  //     link.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       const category = link.dataset.category;
  //       const targetId = link.dataset.target;
  //       displayProducts(category, targetId);
  //     });
  //   });
  // });
  
  // function getProductByCate(_cate) {
  //   return window.listProducts.filter(o => Array.isArray(o.categories) && o.categories.includes(_cate));
  // }
  
  // function displayProducts(category, targetId) {
  //   const target = document.querySelector(`#${targetId}`);
  //   const products = getProductByCate(category);
  //   const htmlString = products.map(o => `
  //     <li>
  //       <div class="product-item">
  //         <div class="product-top">
  //           <a href="product_detail.html?id=${o.id}" class="product-thumb">
  //             <img src="${o.images}" alt="">
  //           </a>
  //           <a href="product_detail.html?id=${o.id}" class="buy-now">Buy now</a>
  //         </div>
  //         <div class="product-info">
  //           <a href="product_detail.html?id=${o.id}" class="product-name">${o.name}</a>
  //           <div class="product-price"><span>$${o.price}</span> &emsp; $${o.sale}</div>
  //           <div class="product-short-description">${o.short_description}</div>
  //         </div>
  //       </div>
  //     </li>
  //   `);
  //   target.innerHTML = htmlString.join('');
  // }
  





  

  
