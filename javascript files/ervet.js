/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// const words = document.getElementsByTagName("A");
const list = document.getElementsByClassName("child");
const menuz = document.getElementById("myDropdown");
const button = document.getElementById('drop');

// console.log(list.textContent);
// console.log(menuz.children);
console.log(button.textContent);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  Array.from(list).forEach(function(numbers){
    const title = numbers.textContent;
    console.log(title);
    
    numbers.addEventListener('click', function(e){
      if(e.target.className == "child"){
        button.innerHTML = title;
      }
    })
  })
}