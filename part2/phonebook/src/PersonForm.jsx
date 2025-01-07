/** hur ska state skickas setnewname osv?? DONE */
const PersonForm = ({ newName,  setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const handlePersonChange = (event) => {
        //console.log('printing from handlePersonChange ' + event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        //console.log('printing from handleNumberChange ' + event.target.value)
        setNewNumber(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault();

        if (newName) { // Check if input is NOT empty
            // Check if the name already exists in the array GPT
            const nameExists = persons.some(person =>
                person.name.toLowerCase() === newName.toLowerCase()
            );
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
    return (
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
    )
}



export default PersonForm
