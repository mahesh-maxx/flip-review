class ReviewFormComponent {
  constructor(stars = []){
    this.stars = stars;
    this.msg = {
      1:'Poor',
      2:'Medium',
      3:'Good',
      4:'Very Good',
      5:'Excellent'
    }
  }
  
  getTemplate(stars = []){
    let template = '';
    for(let i=0 ; i< 5; i++){
      let checked = i < stars ? 'checked' :'';
      let temp = `
                <span class="fa fa-star ${i+1} ${checked}"></span>
      `;
      template += temp;
    }
    template += this.msg[stars] ? this.msg[stars]:'';
    return template;
  }
  
  
  main(){
    console.log('anoop stars', this.stars);
    document.getElementById('stars').innerHTML = this.getTemplate(this.stars);
  }
  
}