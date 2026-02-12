import React, { useEffect, useState } from "react";
import "../src/App.css";
import axios from "axios";
import Movie from "./components/Movie";
const App = () => {
  const [name, setName] = useState("hello");
  const [data, setData] = useState([]);
  const api = `https://www.omdbapi.com/?s=panda&apikey=c65fcde9`;
  useEffect(() => {
    axios.get(api).then((data) => setData(data?.data?.Search));
  }, []);
  const costomName = (e) => {
    const item = e.target.value;
    setName(item);
    costomSearch(item);
    console.log(item);
  };
  const costomSearch = (name) => {
    axios
      .get(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((data) => {
        setData(data?.data?.Search);
      });
  };
  return (
    <div>
      <div className="div">
        <input
          type="search"
          className="search"
          placeholder="Write movie name"
          value={name}
          onChange={costomName}
        />
      </div>
      <div>
        <Movie data={data} />
      </div>
    </div>
  );
};

export default App;
