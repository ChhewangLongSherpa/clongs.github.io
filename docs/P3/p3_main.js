/*
// This section is the NON ES6 way of doing Javascript
const Typewriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
Typewriter.prototype.type = function(){
  //Current index of ward
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if isDeleting
  if(this.isDeleting){
    //Remove char
    this.txt = fullTxt.substring( 0, this.txt.length - 1 );
  } else{
    //Add char
    this.txt = fullTxt.substring( 0, this.txt.length + 1 );
  }

  //Insert txt into txtElement
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // initial Type Speed
  let typeSpeed = 300;

  if( this.isDeleting){
    typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt){
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to the next words
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  //console.log(current); //Debug
  setTimeout(() => this.type(), typeSpeed);
}
*/


//ES6 Class
class Typewriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type(){
    //Current index of ward
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if isDeleting
    if(this.isDeleting){
      //Remove char
      this.txt = fullTxt.substring( 0, this.txt.length - 1 );
    } else{
      //Add char
      this.txt = fullTxt.substring( 0, this.txt.length + 1 );
    }

    //Insert txt into txtElement
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // initial Type Speed
    let typeSpeed = 300;

    if( this.isDeleting){
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt){
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to the next words
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    //console.log(current); //Debug
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM load
document.addEventListener('DOMContentLoaded',init);

//Init app
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  //Init Typewriter
  new Typewriter(txtElement, words, wait);
}
