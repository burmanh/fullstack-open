import { useState } from 'react'

const ListPersons = ({ person }) => {
  return (
    <p>{person.name}</p>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
    },
    //{ name: 'henrik burman' }
  ])
  //console.log(persons)
  const [newName, setNewName] = useState('')


  /** Addera personobjekt till persons-array */  
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: String(persons.length + 1),
    }
    
    /** TODOif else COMPARE - setpers och newname */
    {
      persons.map(person => {
        if (personObject.name.toLowerCase() == person.name.toLowerCase())
          alert(`${newName} is already added to phonebook`)
        else {
          /** TODO CompareInsertion calls setPerson? */
          setPersons(persons.concat(personObject))
          setNewName('')
        }
      }
      )
    }
  }

  //(TODO Kolla in det här och varför det behövs)
  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    
    <>
      <h2>Phonebook</h2>
      
      <form onSubmit={addPerson}>
    
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>

        <div>
          <button type="submit">add</button>
        
        </div>
        
      </form>
      
     

      <h2>Numbers</h2>
     {persons.map(person => 
          <ListPersons key={person.name} person={person} />
        )}

     <div>debug: {newName}</div>
    </>
  )
}

export default App