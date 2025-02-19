import Person from './Person'

const PersonList = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </ul>
  )
}

export default PersonList