import React from 'react'
import { useState,useEffect,useRef } from 'react'
import personService from './components/person'
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('') 
  const [Phonenumber,setPhn]=useState('')
  const [ searchName, setSearchName ] = useState('');
  const [ message, setMessage ] = useState(null);
  const [ type, setType ] = useState('');
  const focusName = useRef();
  
  

  useEffect(() => {
    personService.getAll()
    .then(setPersons);
    console.log(persons)
  }, []);
  
  const addNote = event => {
    event.preventDefault()
   const existingPerson=persons.find(person=>person.name === newName);

   if(existingPerson){
   window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) &&
    personService.update(existingPerson.id,{number:Phonenumber,name:newName})
    .then(updatedPerson=>{
      setPersons(persons.map(person=>person.id === updatedPerson.id ? updatedPerson : person));

      setMessage(`Updated ${newName}'s number`);
      setType('info');
      setNewName('');
      setPhn('');
      focusName.current.focus();    
    })
    .catch(error=>{
      if(error.name ==='TypeError'){
        setMessage(`Information of ${newName} has already been deleted`);
        {console.log(persons)}
        setPersons(persons.filter(person=>person.id !== existingPerson.id));

      }
      else{
        setMessage(error.response.data.error);
      }
      setType('error');

    });
   }
else{
    
    personService.create(newName,Phonenumber)
    .then(newPerson=>{
      setPersons(persons.concat(newPerson));
      setMessage(`Added ${newName}`);
      setType('info');
      setNewName('')
    setPhn('')
    focusName.current.focus();   
    console.log(persons) 

    })
    .catch(error=>{
      setMessage(error.respond.data.error);
      setType('error');
    });
  }
    
};


const Notification = ({message, type, setMessage, setType}) => {

  // Display notification message for 5 seconds
  useEffect(() => {
      if (message) {
          const timer = setTimeout(() => {
              setMessage(null);
              setType('');
          }, 5000);
          return () => clearTimeout(timer);
      }
      // eslint-disable-next-line
  }, [message]);

  return (
      message ?
      <div className={type}>
          {message}
      </div>
      :
      null
  );
};
const deletePerson=(id,name)=>{
  if(window.confirm(`Delete ${name}?`)){
    personService.remove(id)
    .then(()=>{
      setPersons(persons.filter(person => person.id !== id));
      setMessage(`Deleted ${name}`);
      setType('info'); 
    });
  }
};


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNoteChange1 = (event) => {
    console.log(event.target.value)
    setPhn(event.target.value)
  }






  return (
    <div>
      <h1>phonebook</h1>
      <Notification message={message} type={type} setMessage={setMessage} setType={setType} />
      <div>
        Search by name:<input value={searchName}  autoComplete="off"
        onChange={event=>setSearchName(event.target.value)}/>
      </div>
      <h1>add a new</h1>
      <form onSubmit={addNote}>
        <div>
        name:<input
          value={newName}
          onChange={handleNoteChange}
          required autoComplete='off' 
         ref={focusName}
        />
         <div>number: <input 
         value={Phonenumber}
         onChange={handleNoteChange1}
         required autoComplete='off' 
         /></div>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
      </form>  
      <h1>Numbers</h1>
          
            {
                persons.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase()))
                .map(person => (
                    <li key={person.id}>
                        {person.name} {person.number} &nbsp;
                        <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
                        
                    </li>
                ))
            }
       
    </div>
  )
}
export default App