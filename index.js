//Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form')
const fruits = document. querySelector('.fruits');

form.addEventListener('submit',function(event){
  event.preventDefault()
  //selected to input element
  const fruittoadd = document.getElementById("fruit-to-add");
//create the li
  const newLi = document.createElement('li')
    newLi.innerHTML = fruittoadd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'
    const divs=document.getElementsByTagName('div')
    const  seconddiv = divs[1];
seconddiv.appendChild(newLi)
     newLi.classList.add('fruit')
    newLi.class='fruit'
   fruits.appendChild(newLi);
  
  console.log(newLi)
})
   fruits.addEventListener('click',function(event){
     if(event.target.classList.contains('delete-btn')){
         const fruittoDelete = event.target.parentElement;
         fruits.removeChild(fruittoDelete)

     }

})

