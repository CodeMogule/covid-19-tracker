import axios from "axios";
import { elements } from "./elements"
import { countryData } from "./countrydata";


export class Country{
    constructor(){

    }

    getVisitorsCountry(){
        //get visitors country Name IP ADDRESS
        const markup = `<h1 class = "country-name">${geoplugin_countryName(countryData(geoplugin_countryName()))}</h1>`
        elements.countryContainer.insertAdjacentHTML('afterbegin',markup)
    }
    
    getCountries(slice1,slice2,classElement){
        //get lists of countries
        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/countries',
            headers: {
              'x-rapidapi-key': '499b77f963msh3c6abaaee73ee6bp130a5djsn2745a3d67ada',
              'x-rapidapi-host': 'covid-193.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
             let countryLists = response.data.response;
               countryLists.splice(slice1,slice2).forEach((country,index) => {
                let markup = `
                <li data-name = "${country}" ><a href="javascript:void(0)"><h6 onclick = 'selectCountry(event)' class = "test">${country}</h6></a></li>
                 `
                 document.getElementById(classElement).insertAdjacentHTML('beforeend',markup)
             })
            
          }).catch(function (error) {
              console.error(error);
          });
    }
}