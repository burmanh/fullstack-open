import { useState } from 'react'

const ListPersons = ({ person }) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
          id: persons.length + 1,
          name: newName,
          number: newNumber,
        };

        // Add new name to the phonebook
        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');
      }
    }
  };

  const handlePersonChange = (event) => {
    //console.log('printing from handlePersonChange ' + event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    //console.log('printing from handleNumberChange ' + event.target.value)
    setNewNumber(event.target.value)
  }

  return (

    <>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        {/** each <input> element has a single value */}
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
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