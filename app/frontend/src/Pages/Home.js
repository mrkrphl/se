import React from "react";
import SearchBar from "../components/SearchBar"
import NavBar from "../components/NavBar";
import {useState, useEffect} from 'react';
import banner from "../images/banner.JPG";
import {Link} from "react-router-dom";
import {db} from '../firebase-config';
import {collection, getDocs} from "firebase/firestore"; 
import nall_logo from "../images/nall_logo.png";
import nall_logo2 from "../images/nall_logo2.png";

function Home(){

  const [resources, setResources] = useState([]);
  const resourceCollection = collection(db, "resource");

  useEffect(() =>{
    const getResources = async () => {
      const resourcesRef = await getDocs(resourceCollection);
      setResources(resourcesRef.docs.map((doc) => ({...doc.data(), id:doc.id})));
    };

    getResources();
  }, []);

    return(
        <div>
          <NavBar/>
          <header className="p-4 text-white" style={{backgroundColor: '#2E052D'}}>
            <div className="container d-flex flex-wrap align-items-center justify-content-center">
                <div>
                    <img src={nall_logo} width="50" height="54" />
                </div>
                <div className="px-3 text-center text-white">Legal Education Board <br/>
                    Network of Academic Law Librarians, Inc.
                </div>
                <span>
                    <hr/></span>
                <div>
                    <img src={nall_logo2} width="50" height="54" />
                </div>
            </div>
          </header>
          <div className="container py-5 h-100">
            <div className="container d-flex flex-wrap align-items-center justify-content-center">
              <div>
                  <img className="float-left mx-auto mb-2" src="/src/images/nall_logo.png" alt="" width="" height="116px"/>
              </div>
              <div>
                  <p style={{fontSize: '36px', paddingLeft: '3rem'}} className="text-center">A Gateway to Open Access
                      <br/>Legal Resources in the
                      Philippines </p>
              </div>
            </div>
          </div>
          <SearchBar data = {resources}/>
      </div>
    );
}

export default Home;