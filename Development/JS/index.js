import * as dropdown from './dropdown';
import {Country} from './countries'
import { search } from './search';


//country function
const country = new Country()
country.getVisitorsCountry();
country.getCountries(0,130,`first-row`);
country.getCountries(131,75,`second-row`);
country.getCountries(206,77,`third-row`);

//search function
search(`first-row`)
search(`second-row`)
search(`third-row`)



