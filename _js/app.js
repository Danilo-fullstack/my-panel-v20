const inputs = document.querySelectorAll(".input");

function focusFunc(){
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
function blurFunc(){
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove('focus');
  }
}


inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})

// function digitouFunc(){
//   let parent = this.parentNode.parentNode;
//   parent.classList.add("digitou");
// }
// function naodigitouFunc(){
//   let parent = this.parentNode.parentNode;
//   if (this.value == "") {
//     parent.classList.remove('digitou')
//   }
// }

// function digitouFunc(){
//   if (inputs !== "") {
//     parent.classList.add("digitou");
//   }else if (inputs == "") {
//     parent.classList.remove("digitou");
//   }
//     // alert("Funcionou");
// }

// if(document.getElementById("one").value == ""){
// alert('Por favor, preencha o campo nome');
// document.getElementById("nome").focus();
// return false
