import {elements} from './elements'
import { countryData } from './countrydata';
import { removeData } from './countrydata';
 window.clickBtn = function (){
    elements.countryLists.style.visibility = 'visible'
}

elements.close.addEventListener('click', function(){
    elements.countryLists.style.visibility = 'hidden'
})

window.selectCountry = function(event){
    let dataName = Array.from(document.getElementsByClassName('test'))
    let header = Array.from(document.getElementsByClassName('country-name'))
if(event.target.classList.contains('test')){
    dataName.forEach((names,index) => {
        if(index === dataName.indexOf(event.target)){
           header.forEach((ele) => {
               //get country name to the header
               ele.innerHTML = names.textContent
               //hide the dropdown once clicked
               elements.countryLists.style.visibility = 'hidden'
               //get country data
               countryData(names.textContent)
               //remove Data
             removeData(`.box-1`)
             removeData(`.box-2`)
             removeData(`.box-3`)
           })
        }
    })
}
}

