import React from 'react'
const Note=(courses2)=>{
    console.log("entered")
    console.log(courses2)
    const {course}=courses2
    return (
        <div>
          {course.map((course) => (
              <div key={course.id}>
           <Header part={course.name}/>
           <Content part={course.parts}/>
           <Total part={course.parts}/>
           </div>
          ))}
        </div>
      );
    
}
const Header =({part}) =>{
    return(
      <h1 key={part.id}>{part}</h1>
    )
  }

  const Content =({part}) =>{
    return (
      <div>
        {part.map(part =>
          <div key={part.id}>
            
            <p>{part.name}  {part.exercises}</p> 
          
            
            </div>
          )}
      
      
  
  </div>
    )}
    const Total =({part}) =>{
        let sum=0;
        part.map(part =>
          sum=sum+part.exercises
          )
          return(
            <div>
              <h3>total of {sum}  exercises</h3>
            </div>
          )
      }



export default Note