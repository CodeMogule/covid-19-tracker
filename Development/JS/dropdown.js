import {elements} from './elements'
 window.clickBtn = function (){
    elements.countryLists.style.visibility = 'visible'
}

elements.close.addEventListener('click', function(){
    elements.countryLists.style.visibility = 'hidden'
})
