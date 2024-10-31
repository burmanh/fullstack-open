const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // Define the Header component
  const Header = ({ course }) => {
    return (<h1>{course}</h1>)
  };

  // Define the Content component
  const Content = ({ parts }) => {
    /**skicka parts[] till Part */
    /** Part part=parts[0] */
    return (
      <>
        <Part name={parts[0].name} exercises={parts[0].exercises} /> 
        <Part name={parts[1].name} exercises={parts[1].exercises} /> 
        <Part name={parts[2].name} exercises={parts[2].exercises} />
      </>
    )
  };

  // Define the Total component
  const Total = ({ parts}) => {
    return (<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)
  };

  // Define a Part component
  const Part = ({ name, exercises}) => {
    return (<p>{name} {exercises}</p>)
  };
  /** const Part = (part) => {
    return (<p>{part.name} {part.exercises}</p>)
  };*/

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
      />
      <Total parts={ parts} />
    </div>
  )
}

export default App