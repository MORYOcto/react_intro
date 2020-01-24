
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const Beers = ({pageNumber}) => {
    const [beers, setBeers] = useState([])
    
   
     useEffect( () => {
         console.log("toto")
     fetch('https://api.punkapi.com/v2/beers')
      .then(function (response){
          return response.json()
      }).then(setBeers)
      .then(console.log(beers))
      }, [pageNumber])

    console.log(pageNumber)
      return (
        <ul>
            {beers.map(beer => (<li key = {beer.id}>{beer.name}</li>))}
            
        </ul>

      )
}





