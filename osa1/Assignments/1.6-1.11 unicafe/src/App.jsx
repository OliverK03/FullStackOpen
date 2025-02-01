import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0})
  
  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
  }

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  }

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }

  return (
    <div>
      <b>Give Feedback</b>
      <div>
        <br />
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <br />
      <b>Statistics</b>
      <div>
        <p>
        good {clicks.good}<br />
        neutral {clicks.neutral}<br />
        bad {clicks.bad}
        </p>
    </div>
    </div>
  )
}
  export default App