
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
    let review  = new ReviewComponent(reviews);
    review.main();
  })
  
  let onStarClick = (e)=>{
    console.log('anp here', e);
    console.log('anp here', e.srcElement.classList);
    let stars = e &&  e.srcElement &&  e.srcElement.classList ? e.srcElement.classList :[];
    let star = parseInt(stars[2]);
    console.log('anp star', star);
    let rForm  = new ReviewFormComponent(star);
    rForm.main();
  }
  
  document.getElementById('stars').addEventListener('click', onStarClick);

})();