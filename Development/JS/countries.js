import axios from "axios";
import { elements } from "./elements"
import { apiKey } from "./index";

export class Country{
    constructor(){
        //...
    }
    getVisitorsCountry = function(){
        //get visitors country Name IP ADDRESS
        const markup = `<h1>${geoplugin_countryName()}</h1>`
        elements.countryContainer.insertAdjacentHTML('afterbegin',markup)
    }
    getCountries = async function(){
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
             countryLists.forEach((country) => {
                 let markup = `
                 <a href=""><h6>${country}</h6></a>
                 `
                 elements.Lists.insertAdjacentHTML('beforeend',markup)
             })
          }).catch(function (error) {
              console.error(error);
          });
    }
}