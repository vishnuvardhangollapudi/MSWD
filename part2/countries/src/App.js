import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DetailsofCountry from './components/DetailsofCountry';

const App=()=>{
  const [countries,setCountries]=useState([]);

  const [country,setCountry]=useState('');

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>setCountries(response.data));//it will add the details of all countries to coutries 
  },[]);
  
  const CountryList=({country,countries,setCountry})=>{
    const Result=countries.filter(count=>count.name.toLowerCase().includes(country.toLowerCase()));
    return(
      <div>
        {
          Result.length > 10?
          <p1>Too many matches,specify another filter</p1>
          :
          Result.length ===1?
          <DetailsofCountry country={Result[0]}/>
          :
          <ul style={{listStyle: 'none', padding: 0}}>
            {
              Result.map(result=>(
                <l1 key={result.name}>
                  {result.name}<button onClick={()=>setCountry(result.name)}>show</button><br></br>
                </l1>
              ))
            }
          </ul>
        }
      </div>
    );
  };
return(
  <div>
    <label>Find Country:</label>
    <input value={country} autoFocus autoComplete='off'
     onChange={event=>setCountry(event.target.value)}
     />
     {country && <CountryList country={country} countries={countries} setCountry={setCountry}/>}
  </div>
)
};
export default App;