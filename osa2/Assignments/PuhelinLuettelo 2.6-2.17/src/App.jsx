import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import personService from './services/persons'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    const ifSamename = persons.some(person => person.name === newName)
    if (ifSamename) {
      setErrorMessage(`${newName} is already added to phonebook`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }
    setMessage(`Added ${newName}`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    //
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .delete(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    } 
  }

  const SuccessfulNotification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="success">
        {message}
      </div>
    )
  }

  const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="error">
        {message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessfulNotification message={message} />
      <ErrorNotification message={errorMessage} />
      <Filter setFilter={setFilter} />
      <h3>Add a new person to phonebook</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PersonList personsToShow={personsToShow} handleDelete={deletePerson}/>
    </div>
  )
}

export default App