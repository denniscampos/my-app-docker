// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log("error: ******** ", err));
  }, []);

  return (
    <div className="App">
      <h1>My default is better than react 🤷🏼‍♂️</h1>
      <p>hi</p>
      {data}
    </div>
  );
}

export default App;
