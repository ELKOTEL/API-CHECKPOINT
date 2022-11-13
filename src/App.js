import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from './Components/UserList'

const App = () => {
 const [listOfUSer, setListOfUSer] = useState();// where to store the returned data
 const [error, setError] = useState(null);// where to store the coming errors
 const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
   function fetchData() {// the function to fetch data from the api
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
           setListOfUSer(result.data);
           setIsLoading(false);      
      })
      .catch(err => setError(err));
  };
   fetchData();
 }, []);

 return (
  <div className="Container">   
      <UserList listOfUSer={listOfUSer} isLoading={isLoading} error={error}/>   
  </div> 
);
};
export default App;
