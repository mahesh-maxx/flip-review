
(()=>{
  fetch('http://flipkart9jun.mockable.io/products')
  .then((resp) => resp.json()) 
  .then((products)=>{
    let product  = new ProductComponent(products);
    product.main();
    
  });

  fetch('http://flipkart9jun.mockable.io/reviews/1')
  .then((resp) => resp.json()) 
  .then((reviews)=>{
    console.log('anp reviews', reviews);
  })

})();