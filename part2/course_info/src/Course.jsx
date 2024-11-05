
const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name}: {part.exercises} exercises
        </p>
      ))}
    </div>
  );
};

const Header = ({ courseName }) => <h1>{ courseName }</h1>

const Course = ({ course }) => {
  //const course = 'Half Stack application development'
  //console.log(course)
  return (
    <>
      <Header courseName = { course.name } />
      <Part parts = { course.parts } />
     
    </>
  )
}
export default Course