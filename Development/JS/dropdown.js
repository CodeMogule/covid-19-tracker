import {elements} from './elements'
 window.clickBtn = function (){
    elements.countryLists.style.visibility = 'visible'
}

elements.close.addEventListener('click', function(){
    elements.countryLists.style.visibility = 'hidden'
})

window.selectCountry = function(event,ClassElement){
    let dataName = document.getElementById(ClassElement).getElementsByTagName('li')
if(event.target.classList.contains('test')){
    let arr = Array.from(document.getElementsByClassName('test'))
    Array.from(dataName).forEach((names,index) => {
        if(index === arr.indexOf(event.target)){
            console.log(names.textContent)
        }
    })
}
}

