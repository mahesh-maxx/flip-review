class ReviewComponent {
  constructor(reviews = []){
    this.reviews = reviews;
  }
  
  getTemplate(reviews = []){
    let template = '';
    for(let r of reviews){
      let temp = `<div>
                    <h3>${r.rating}* ${r.title}</h3>
                    <p>${r.text}</p>
                    <span>${r.userName} ${r.created}</span>
                  </div>
      `;
      template += temp;
    }
    return template;
  }
  
  
  main(){
    console.log('anoop reviews', this.reviews);
    document.getElementById('reviews').innerHTML = this.getTemplate(this.reviews);
  }
  
}