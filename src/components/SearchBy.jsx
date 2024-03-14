import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import cityData from '../data/citiesOfNetherlands.json'
// const COUTRIES_AND_CITIES_API = "https://countriesnow.space/api/v0.1/countries"


const SearchBy = (props) => {
    // State to hold the user's input
    const [selectedOption, setSelectedOption] = useState(null);

    // State to hold the options for the dropdown
    const [options, setOptions] = useState([]);
    const filteredCountry = cityData[0].cities;
    const cityCountryData = [
        { label: 'Netherlands', value: 'Netherlands', type: 'country' }
    ];

    // useEffect(() => {
    //     axios.get(COUTRIES_AND_CITIES_API)
    //         .then(response => {
    //             const tempCityArray = response.data.data.filter((obj) => {
    //                 return (obj.country === "Netherlands")

    //             })
    //             const tempSpecificCity = tempCityArray.map((obj) => {
    //                 return (obj.cities)
    //             })
    //             let filteredArray = [...new Set((tempSpecificCity).flat())];
    //             let cityArray = filteredArray.map((city) => {
    //                 let label = city;
    //                 let value = city;
    //                 let type = "city"
    //                 return { label, value, type };
    //             })
    //             const cityAndCountry = [...cityCountryData, ...cityArray]
    //             setOptions(cityAndCountry);
    //         })
    // }, []);

    let cityArray = filteredCountry.map((city) => {
        let label = city;
        let value = city;
        let type = "city"
        return { label, value, type };
    })
    const cityAndCountry = [ ...cityArray]
    useEffect(() => { setOptions(cityAndCountry); }, [])

    // Handle when the user selects an option from the dropdown
    const handleSelectChange = selectedOption => {
        setSelectedOption(selectedOption);
        const { value, type } = selectedOption;
        props.callBack({ value, type })
    };

    return (
        <div className=' relative text-gray-600'>
            <Select className='bg-white h-10 rounded-lg text-sm focus:outline-none'
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
                placeholder="Select a city..."
            />
        </div>
    );
};

export default SearchBy;