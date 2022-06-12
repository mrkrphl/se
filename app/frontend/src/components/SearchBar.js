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

    function changeIcon(){  
    const targetDiv = document.getElementById("hide");
    const btn = document.getElementById("toggle");

        if (targetDiv.style.display !== "none"){
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "block";
        }
    };
    return(
        <div className="container">
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                        </path>
                    </svg>
                </span>
                <input type="text" className="form-control" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filteredData.length !== 0 && (
                    <div classNameName = "dataResult">
                    {filteredData.slice(0, 15).map(resource => {
                        return(
                            <div key = {resource.id}>
                                <a classNameName = "dataItem" href = {'resources' + resource.id}  target = "_blank">
                                    {resource.title} </a>
                            </div>
                        )
                    })}
                </div>
                )}
            <div className="d-flex flex-wrap mt-2">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </div>
                <div className="text-end">
                    <h5>Advance Search</h5>
                </div> 
                <div className="btn-group dropend">
                    <button type="button" id="toggle" className="btn drop" data-bs-toggle="dropdown" aria-expanded="false" >
                    <span className="visually-hidden">Toggle Dropend</span>
                    <i className="fa-solid fa-chevron-down fa-customize" onClick={changeIcon}></i>
                    </button>
                    <div id="hide" className="mt-2">
                        <h5>Advance Search</h5>
                    </div>
                    <div className="dropdown-menu">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Title 
                            </label>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Author
                            </label>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Institution
                            </label>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;