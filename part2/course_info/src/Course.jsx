
const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      ))}
    </div>
  );
};
//Add sauce with reduce
const Sum = ({ summingParts }) => {
  const totalExercises = summingParts.reduce((sum, part) => sum + part.exercises,0);

  return (
    <div>
      <h2>Total nbr of exercises: {totalExercises}</h2>
    </div>
  );
};


const Header = ({ courseName }) => <h1>{ courseName }</h1>

const Course = ({ course }) => {
  return (
    <>
      <Header courseName = { course.name } />
      <Part parts = { course.parts } />
      <Sum summingParts = { course.parts } />
     
    </>
  )
}
export default Course