import axios from "axios";
import { elements } from "./elements";

export async function countryData(countryName){
    let options1 = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/history',
        params: {country: `${countryName}`,day: `${new Date().toISOString().slice(0, 10)}`},
        headers: {
          'x-rapidapi-key': '499b77f963msh3c6abaaee73ee6bp130a5djsn2745a3d67ada',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
      };

      axios.request(options1).then(function (response) {
          let getRes = response.data.response
          getRes.splice(0,1).forEach((data) => {
              console.log(data)
              //cases UI results
              const markupCases = `
              <h2>${data.cases.total}</h2>
                    <h3>${data.cases.new}</h3>
              `
              elements.box1.insertAdjacentHTML("beforeend",markupCases)

               //Recovered UI results
               const markupRec = `
               <h2>${data.cases.recovered}</h2>
                     <h3>NO DATA!</h3>
               `
               elements.box2.insertAdjacentHTML("beforeend",markupRec)

                //Death UI results
              const markupDeath = `
              <h2>${data.deaths.total}</h2>
                    <h3>${data.deaths.new}</h3>
              `
              elements.box3.insertAdjacentHTML("beforeend",markupDeath)              
          })
      }).catch(function (error) {
          console.error(error);
      });
    }

    //remove data function
    export function removeData(box){
        Array.from(document.querySelector(box).getElementsByTagName('h2')).forEach((test) => {
            test.textContent = ''
        })
        Array.from(document.querySelector(box).getElementsByTagName('h3')).forEach((test) => {
         test.textContent = ''
     })
      }