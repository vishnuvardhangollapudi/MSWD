const coursename = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }
  ]
const Header = () =>{
  return (
    <div>
      <h1>{coursename}</h1>
    </div>
  )
}
const Content=({part})=>{
  return (
    <div>
      {part.map(part =>
        <div>
          <ul>
          <p>{part.name} -- {part.exercise}</p> 
          </ul>
          
          </div>
        )}
    
    

</div>
  )}
  const Total=({part})=>{
    var sum=0;
    part.map(part =>sum=sum+part.exercise)
      return(<h1>Total sum:{sum}</h1>)
  }

  const App = () => {
    return (
      <div>
      <Header/>
      <Content part={parts}/>
      <Total  part={parts}/>
      </div>
    )
  }
  export default App