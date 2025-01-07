
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

const Sum = ({ summingParts }) => {
  const totalExercises = summingParts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h2>Total nbr of exercises: {totalExercises}</h2>
    </div>
  );
};

const Display = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Part parts={course.parts} />
      <Sum summingParts={course.parts} />

    </>
  );
};

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Course = ( {courses}) => {
  return (
    //extract course object with map on initial array courses from App.js
    <div>
      <h1>Curriculum</h1>
      {courses.map((name, index) => (
        // Render ChildComponent for each name in the array   
          <Display course={courses[index]} />
      ))}
    </div>

  )
}
export default Course