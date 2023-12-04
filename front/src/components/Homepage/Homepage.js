import React from 'react';
import catdogdle from '../../styles/assets/images/catdogdle.jpg'
import './Homepage.css'

function Homepage(){
    return(
        <div>
        <h1>Homepage Component</h1>
        <p>this website application is intended to generate our customer with a filtered choices of pets fast and accurate</p>
        <img src={catdogdle} alt="Home" className='smaller-image'/>
        </div>
    );
}

export default Homepage;
