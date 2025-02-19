import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons || [])
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    const ifSamename = persons.some(person => person.name === newName)
    if (ifSamename) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
        value={newName}
        onChange={handlePersonChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person =>
            <Person key={person.name} name={person.name} />
            )}
        </ul>
      </div>
    </div>
  )

}

export default App