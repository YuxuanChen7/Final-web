import React, {useEffect, useState} from 'react'

function App() {

  const [backData, setbackData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setbackData(data)
      }
    )
  }, [])

  return (
    <div >
      {(typeof backData.users === 'underfined') ? (
        <p>Loading....</p>
      ):(backData.users.map((user, i) => (
        <p key={i} >{user}</p>
      ))
      )}
    </div>
  );
}

export default App;
