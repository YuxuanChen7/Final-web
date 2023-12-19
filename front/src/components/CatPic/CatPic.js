import { useState } from "react";

export default function Cat() {
  const [Catimage, setcatimage] = useState(null);

  const Endpoint_Cat = "https://api.thecatapi.com/v1/images/search";

  function handleGetRandomCat() {
    fetch(Endpoint_Cat)
      .then((response) => response.json())
      .then((json) => setcatimage(json[0].url))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h2>Random Cat Picture</h2>
      <h2>
        <button onClick={handleGetRandomCat}>Get a Random Cat</button>
      </h2>
      {Catimage && <img src={Catimage} alt="Cat" />}
    </>
  );
}
