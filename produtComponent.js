class ProductComponent {
  constructor(products = []){
    this.products = products;
  }
  
  getTemplate(products = []){
    let template = '';
    for(let p of products){
      let temp = `<div>
                    <img src="${p.productImage}" alt="">
                    <h3>${p.title}</h3>
                    <h4>${p.rating.average} ${p.rating.ratingCount} ratings & ${p.rating.reviewCount} reviews</h4>
                    <h4> &#8377; ${p.pricing.value}</h4>
                  </div>
      `;
      template += temp;
    }
    return template;
  }
  
  
  main(){
    console.log('anoop products', this.products);
    document.getElementById('products').innerHTML = this.getTemplate(this.products);
  }
  
}