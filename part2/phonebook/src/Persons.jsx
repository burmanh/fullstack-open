import SinglePerson from "./SinglePerson";

const Persons = ({ persons }) => {
    return (
        <>
        {persons.map(person =>
            <SinglePerson key={person.id} person={person} />
          )}
        </>
    )
  }

export default Persons