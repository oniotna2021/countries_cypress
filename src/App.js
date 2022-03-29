import "./App.css";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/${search ?`name/${search }`:'all'}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const regionCountry = data.filter((country) => country.region === region);
 

  return (
    <div className="App">
      <div>
        <Navbar />
        <SearchBar setRegion={setRegion} setSearch={setSearch} />

        <div className="row">
          <div className="col12 col-lg-12">
            <div className="products mb-3">
              <div className="row justify-content-center">
                { region ? (
                      regionCountry.map((country, index) => (
                        <Card
                        img={country.flags.png}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        
                        />
                      ))
                )
                :
                data.map((country, index) => (
                  <Card 
                  key={index}
                  img={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
{/* 
        {console.log(data[0].name.common)}

        {data.map((country, index) => (
          <Tarjeta img={country.flags.png} />
        ))} */}
      </div>
    </div>
  );
}

export default App;
