const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
  
      </div>
    )
  }
  
    const Header = (props) => <h1>{props.courses}</h1>
  
    const Content = (props) => (
      <div>
        {props.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  
      const Part = (props) => (
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      )
  
      const Total = ({ parts }) => {
        const total = parts.reduce((sum, part) => sum + part.exercises, 0)
        console.log('sum', total)
        console.log('parts', parts)
        return (
          <p>
            <strong>Total of {total} exercises</strong>
          </p>
        )
}
  
    export default Course