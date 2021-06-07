import React, { useState } from 'react'
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const Anecdote1=()=>{
    const [selected,setSelected]=useState(0)
    const [vote,setVote]=useState(
      new Array(anecdotes.length).fill(0)
  
    )
  
    const Randomanecdote=()=>{
      let a= Math.floor(Math.random() * 6);
      setSelected(a) 
    }
    const Vote=()=>{
      const a=[...vote]
      a[selected]+=1
      setVote(a)
    }
    const Max=()=>{
      let a=0;
      let index=0
      vote.forEach((value, i) => {
        if (a < value) {
          a = value
          index = i
        }
      })
      return index;
    }
    const max=Max();
    return (
      <div>
        <h1>Annecdote of the day</h1>
        <p>{anecdotes[selected]}</p><br></br>
        <p> has {vote[selected]}</p>
        <button onClick={Randomanecdote}>     nextAnnecdote</button>
        <button onClick={Vote}>vote</button>
        <h1>Annecdote with most votes</h1>
        <p>{anecdotes[max]}</p>
        <p>{vote[max]}</p>
      </div>
    )
  }


  const App = () => {
    return (
      <div>
       <Anecdote1/>
      </div>
    )
  }



export default App