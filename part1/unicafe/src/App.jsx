const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  
  const part3 = 'State of a component'
  const exercises3 = 14
  
  // Define the Header component
  const Header = ({ course }) => {
    return (<h1>{course}</h1>)
  };
  
  // Define the Content component
  const Content = ({ part1 , part2, part3, exercise1, exercise2, exercise3}) => {
    return (
      <>
        <p>{part1} {exercise1}</p>
        <p>{part2} {exercise2}</p>
        <p>{part3} {exercise3}</p>
      </>
    )
  };

  // Define the Total component
  const Total = ({nbr1, nbr2, nbr3}) => {
    return (<p>Number of exercises {nbr1 + nbr2 + nbr3}</p>)
  };

  return (
    <>
      <Header course={course} />
      <Content
        part1 = {part1} exercise1 = {exercises1}
        part2 = {part2} exercise2 = {exercises2}
        part3 = {part3} exercise3 = {exercises3}
      />
      <Total nbr1={exercises1} nbr2={exercises2} nbr3={exercises3} />    
    </>
  )
}

export default App