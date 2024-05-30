
const checkbox = document.getElementById("checkbox")
let isdark=true;
checkbox.addEventListener('click',()=>{
  document.body.classList.toggle('text-bg-dark')
  if (isdark) {
    btn_dark.textContent="light"
    
    isdark=false;
  }
  else{
    btn_dark.textContent="black"
    
    isdark=true;
  }
})





function send(){
  alert("your comment is send !!")
}
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}