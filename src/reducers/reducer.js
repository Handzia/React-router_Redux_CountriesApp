import { GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRY, SET_CONTINENT} from '../actions/actions';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {}
};

const countriesReducer = function(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
            return Object.assign({}, state, {selectedCountry})

        default: 
            return state
    };  
}


export default countriesReducer;