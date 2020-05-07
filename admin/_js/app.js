const inputs = document.querySelectorAll(".input");

function focusFunc(){
  let parent = this.parentNode.parentNode;
  parent.classList.remove('blur');
  parent.classList.add('focus');
}
function blurFunc(){
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    /*parent.classList.remove('focus');*/
    parent.classList.add('blur');
  }
}


inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})

function one() {
  var x = document.querySelector(".one .input");
  var place = document.querySelector(".one");

  if(x.value.length >= 1) {
  	place.classList.add("digitou");
  }else if(x.value.length < 1) {
    place.classList.remove('digitou');
  }
}
function two() {
  var x = document.querySelector(".two .input");
  var place = document.querySelector(".two");

  if(x.value.length >= 1) {
  	place.classList.add("digitou");
  }else if(x.value.length < 1) {
    place.classList.remove('digitou');
  }
}