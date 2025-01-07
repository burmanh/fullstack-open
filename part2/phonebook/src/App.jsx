import { useState } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  return (

    <>
      <h1>Phonebook</h1>
      <p>here goes searchfield</p>
      <h2>Add to phonebook</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </>
  )
}

export default App