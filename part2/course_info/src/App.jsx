import Course from "./Course"

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a onent',
        exercises: 14,
        id: 3
      },
      {
        name: 'State of a component',
        exercises: 12,
        id: 4
      },
      {
        name: 'Sa component',
        exercises: 4,
        id: 5
      }
    ]
  }


  return ( <Course course={course} /> )
}

export default App