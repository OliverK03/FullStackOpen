import { useState } from 'react'


const Statistics = ({clicks, totalClicks, average, positive}) => {
  return (
    <div>
      <b>Statistics</b>
      <p>
        good {clicks.good}<br />
        neutral {clicks.neutral}<br />
        bad {clicks.bad} <br />
        all {totalClicks} <br />
        average {average} <br />
        positive {positive} % <br />
      </p>
    </div>
  )
}

const History = ({clicks, totalClicks, average, positive}) => {
  if (totalClicks === 0) {
    return (
      <div>
        <br />
        <b>Statistics</b>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <br />
      <Statistics clicks={clicks} totalClicks={totalClicks} average={average} positive={positive} />
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0})
  const [totalClicks, setTotal] = useState(0)
  const [score, setScore] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  
  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
    const updateGood = clicks.good + 1
    const newTotalClicks = updateGood + clicks.neutral + clicks.bad
    setTotal(newTotalClicks)
    const updateScore = score + 1
    setScore(updateScore)
    setAverage(updateScore / newTotalClicks)
    setPositive(updateGood / newTotalClicks * 100)
  }

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
    const updateNeutral = clicks.neutral + 1
    const newTotalClicks = clicks.good + updateNeutral + clicks.bad
    setTotal(newTotalClicks)
    setAverage(score / newTotalClicks)
    setPositive(clicks.good / newTotalClicks * 100)
  }

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
    const updateBad = clicks.bad + 1
    const newTotalClicks = clicks.good + clicks.neutral + updateBad
    setTotal(newTotalClicks)
    const updateScore = score - 1
    setScore(updateScore)
    setAverage(updateScore / newTotalClicks)
    setPositive(clicks.good / newTotalClicks * 100)
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
      <History clicks={clicks} totalClicks={totalClicks} average={average} positive={positive} />
    </div>
  )
}

export default App