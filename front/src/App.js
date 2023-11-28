import React, {useEffect, useState} from 'react'

function App() {

  const [backData, setbackData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackData(data)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [])

  return (
    <div >
      {(typeof backData.users === 'undefined') ? (
        <p>Loading....</p>
      ): backData.users === null ? (
        <p>No users available</p>
      ) : (backData.users.map((user, i) => (
        <p key={i} >{user}</p>
      ))
      )}
    </div>
  );
}

export default App;
