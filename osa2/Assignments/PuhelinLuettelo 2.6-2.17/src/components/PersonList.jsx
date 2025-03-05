import Person from './Person'

const PersonList = ({ personsToShow, handleDelete }) => {
  return (
    <ul>
      {personsToShow.map(person =>
        <Person 
          key={person.name} 
          name={person.name} 
          number={person.number} 
          handleDelete={() => handleDelete(person.id)}
        />
      )}
    </ul>
  )
}

export default PersonList