import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import oval from './images/oval.svg';

const App = () => {

  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [inProp, setInProp] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios("https://api.chucknorris.io/jokes/random");
      //console.log(result.data);
      setJoke(`${result.data.value}`)
      setLoading(false)
    }
    fetchData();
  }, [fetching])

  return (
    <div className="jokeDiv">
      <img src="https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S" id="chuckImg"></img>
      <h1>Chuck Norris <br />Joke Generator</h1>
      <button onClick={() => setFetching(!fetching)}> In Soviet Russia, button clicks YOU</button><br />
      {loading ? (
        <img
          className="loadingImg"
          src={oval}
          alt="loader"
          height="20px"
        />
      ) : (

          <h3 className="theJoke bounceIn">{joke}</h3>

        )}
    </div >
  )
}

export default App;