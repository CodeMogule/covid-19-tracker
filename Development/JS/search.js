import { elements } from "./elements";

export function search(countryClass){
    elements.searchText.addEventListener('keyup',function(ele){
        const searchVal = ele.target.value.toLowerCase().trim()
        const countryLists = document.getElementById(countryClass).getElementsByTagName('li')
        
    Array.from(countryLists).forEach((items)=>{
        console.log(items)
        const name = items.firstElementChild.textContent;
        if(name.toLowerCase().indexOf(searchVal) != -1){
            items.style.display = 'block'
        } 
        else{
            items.style.display = 'none'
        }
        })
        })
}