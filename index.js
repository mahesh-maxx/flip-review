
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
    let stars = e &&  e.srcElement &&  e.srcElement.classList ? e.srcElement.classList :[];
    let star = parseInt(stars[2]);
    let rForm  = new ReviewFormComponent(star);
    rForm.main();
  }
  
  let onReviewSubmitClick = (e)=>{
    if(window.localStorage){
      //set
      let data = {};
     localStorage.setItem('review', JSON.stringify(data));
    }
    
    
    if(window.localStorage){
      //get
      let data = localStorage.getItem('reviews');
      if(data){
        let data = JSON.parse(data);
        let result = data[0] ? data.result:undefined;
        
      }
    }
    
  }
  
  document.getElementById('stars').addEventListener('click', onStarClick);
  document.getElementById('reviewSubmit').addEventListener('click', onReviewSubmitClick);

})();