import React from "react";
import SearchBar from "../components/SearchBar"
import {useState, useEffect} from 'react';
import banner from "../images/banner.JPG";
import './css/Home.css';
import {Link} from "react-router-dom";

function Home(){

  const [articles, setArticles] = useState([])

  useEffect(() =>{
    fetch('http://localhost:5000/info/get', {
      'method':'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(resp => resp.json()).then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

    return(
        <div>
        <header class="header">
          <div class="nav">
            <h1 class="logo">
                <a href="#">*placeholder</a> 
            </h1>
            <ul class="navlinks">
              <li> 
                  <Link to="/about">About Us</Link>
              </li>  
              <li> 
                  <a href="#">Contact Us</a>
              </li> 
            </ul>
            <div class="signin">
              <a href="#">Sign In</a>
            </div>
            <div class="signout">
              <a href="#">Sign Out</a>
            </div>
          </div>
        </header>
        <div class="banner">
            <a href="#"><img src={banner}/></a>
        </div>
        <main class="main">
          <div class="container">
              <h1 > LOGO  </h1>
            <div class="title">
              <h3> A Gateway to Open Access<br/> Legal Resources in the Philippines </h3>
            </div>
          </div>
          <div class="searchBar">
            <SearchBar placeholder="Search..." data={articles}/>
          </div>
        </main>
        <div class="footer">
          <p>©2022 A Gateway to Open Access Legal Resources in the Philippines All rights reserved. <a href="#">Contact Us</a></p>
        </div>
    </div>
    );
}

export default Home;