
function l_image (a, b) {
  document.example_img.src = a;
  document.getElementsByClassName("list").innerHTML = b;
}
let c = null
let l = null

const lists = document.querySelectorAll('.list')
function remuvActiveclass(){
  lists.forEach(list=> {
    list.classList.remove('active')
  }) 
}
lists.forEach(list=> {
  list.addEventListener('click', (e)=>{
    remuvActiveclass()
    list.classList.add('active');
    sechBtn()
  })
}) 

const bth = document.querySelectorAll('.btn')
function remuvActiveclass2(){
  bth.forEach(list=> {
    list.classList.remove('active')
  }) 
}
bth.forEach(list=> {
  list.addEventListener('click', (e)=>{
    remuvActiveclass2()
    list.classList.add('active');
    sechBtn()
  })
}) 

const secBtn = document.querySelector('.second_page button')
const backBtn = document.querySelector('.back_button')
console.log(secBtn)
function sechBtn(){
  console.log(document.querySelectorAll('.active').length)
  if (document.querySelectorAll('.active').length===2){
    secBtn.style.cssText = 'opacity:1; pointer-events: auto;'
  }
}
const wrappSec = document.querySelector('.wrapper_second')
const wrappFirst = document.querySelector('.wrapper_first')
function forSecpage(){
  secBtn.addEventListener('click', ()=> {
    wrappFirst.style.display = 'none';
    wrappSec.style.opacity = '1';
  })
}
forSecpage()
function forBackpage(){
  backBtn.addEventListener('click', ()=> {
    wrappSec.style.opacity = '0';
    wrappFirst.style.display = 'block';
  })
}
forBackpage()

const buttonOne = document.querySelector('#list_one');
const buttonTwo = document.querySelector('#list_two');
const buttonThree = document.querySelector('#list_three');
const buttonFour = document.querySelector('#list_four');
const buttonFive = document.querySelector('#list_five');
const buttonSix = document.querySelector('#list_six');
const buttonSeven = document.querySelector('#list_seven');


buttonOne.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '26'
})
buttonTwo.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '58'
})
buttonThree.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '363'
})
buttonFour.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '52'
})
buttonFive.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '12'
})
buttonSix.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '68'
})
buttonSeven.addEventListener('click', function(){
  document.getElementById('price_one').textContent = '551'
})


buttonOne.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '31'
})
buttonTwo.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '58'
})
buttonThree.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '416'
})
buttonFour.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '52'
})
buttonFive.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '12'
})
buttonSix.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '86'
})
buttonSeven.addEventListener('click', function(){
  document.getElementById('price_two').textContent = '661'
})

buttonOne.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '47'
})
buttonTwo.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '75'
})
buttonThree.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '502'
})
buttonFour.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '52'
})
buttonFive.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '12'
})
buttonSix.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '100'
})
buttonSeven.addEventListener('click', function(){
  document.getElementById('price_tree').textContent = '661'
})

buttonOne.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '30'
})
buttonTwo.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '105'
})
buttonThree.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '120'
})
buttonFour.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '45'
})
buttonFive.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '15'
})
buttonSix.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '45'
})
buttonSeven.addEventListener('click', function(){
  document.getElementById('time_one').textContent = '120'
})

buttonOne.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '30'
})
buttonTwo.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '105'
})
buttonThree.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '120'
})
buttonFour.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '45'
})
buttonFive.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '15'
})
buttonSix.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '45'
})
buttonSeven.addEventListener('click', function(){
  document.getElementById('time_two').textContent = '120'
})

buttonOne.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '30'
})
buttonTwo.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '105'
})
buttonThree.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '120'
})
buttonFour.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '45'
})
buttonFive.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '15'
})
buttonSix.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '45'
})
buttonSeven.addEventListener('click', function(){
  document.getElementById('time_three').textContent = '120'
})