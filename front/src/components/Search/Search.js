import React from 'react';

function Homepage(){
    return(
        <div>
        <h1>Search Component</h1>
        <p>this is the search bar, type in inputs of attribute you want to have</p>
        <input type="text" name="attribute" placeholder="Enter your attribute"></input>
        </div>
    );
}

export default Homepage;
