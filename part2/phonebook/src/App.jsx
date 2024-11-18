import { useState } from 'react'

const ListPersons = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Henrik Burman',
      id: 1
    },
  ])
  const [newName, setNewName] = useState('')

  /** Addera personobjekt till persons-array */
  const addPerson = (event) => {
    event.preventDefault();

    if (newName) { // Check if input is NOT empty
      // Check if the name already exists in the array GPT
      const nameExists = persons.some(person =>
        person.name.toLowerCase() === newName.toLowerCase()
      );
    /**
    let nameExists = false; //nameflag
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
        nameExists = true;
        break; // break on match, including lowercase
      }
    }
    */
      //"isolate state updates from the rest of addPerson" if name already exists
      if (nameExists) {
        alert(`${newName} is already added to phonebook`);
      } else {
        const personObject = {
          name: newName,
          id: persons.length + 1,
        };

        // Add new name to the phonebook
        setPersons(persons.concat(personObject));
        setNewName('');
      }
    }
  };

  const handlePersonChange = (event) => {
    //console.log('printing from handlePersonChange ' + event.target.value)
    setNewName(event.target.value)
  }

  return (

    <>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>



      <h2>Numbers</h2>
      {persons.map(person =>
        <ListPersons key={person.id} person={person} />
      )}

      <div>debug: {newName}</div>
    </>
  )
}

export default App