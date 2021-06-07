import React, {useState} from 'react';
const STATISTICS = (props) => {
  let good=props.good
  let bad=props.bad
  let neutral=props.neutral
  var average=(good *1+bad * -1+neutral *0)/(good+neutral+bad);
  var positive=positive=(good)/(good+neutral+bad)*100;

  if (good > 0 || neutral > 0 || bad > 0){
    return(      
      <div>
         <h1>STATISTICS</h1>
          <table>
            <tbody>
       
        <Show a1="good" b1={good} />
          <Show a1="neutral" b1={neutral} />
          <Show a1="bad" b1={bad} />
          <Show a1="all" b1={good+neutral+bad}/>
          <Show a1="average" b1={average} />
          <Show a1="positive" b1={ positive+"%"} />
      
      </tbody>

      
      </table>
      </div>
    )
   

  }
  return (
    <p>No feedback Given</p>
  )


  

}
const Show=({a1,b1})=>{
  return(
    <tr>
    <td>{a1}</td>
    <td>{b1}</td>
  </tr>

  )

}
const Unicef=()=>{
  const [good,setGood]=useState(0)
  const [bad,setBad]=useState(0)
  const [neutral,setNeutral]=useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
       <button onClick={() => setBad(bad + 1)}>bad</button>
       <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
       <STATISTICS good={good} bad={bad} neutral={neutral}></STATISTICS>
    </div>
    )



}
const App = () => {
  return (
    <div>
     <Unicef/>
    </div>
  )
}




export default App