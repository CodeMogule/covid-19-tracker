import * as dropdown from './dropdown';
import {Country} from './countries'

export let apiKey = `499b77f963msh3c6abaaee73ee6bp130a5djsn2745a3d67ada`;

//country function
const country = new Country()
country.getVisitorsCountry();
country.getCountries();
