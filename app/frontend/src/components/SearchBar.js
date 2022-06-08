import React from 'react'
import './SearchBar.css';
import {useState, useEffect} from 'react'

function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((resource) => {
            return resource.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter);
        }
    };
    return(
        <div className = "search">
            <div className = "searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className = "searchIcon"></div>
            </div>
            {filteredData.length !== 0 && (
                <div className = "dataResult">
                {filteredData.slice(0, 15).map(resource => {
                    return(
                        <div key = {resource.id}>
                            <a className = "dataItem" href = {'resources' + resource.id}  target = "_blank">
                                {resource.title} </a>
                        </div>
                    )
                })}
            </div>
            )}
        </div>
    );
}

export default SearchBar;