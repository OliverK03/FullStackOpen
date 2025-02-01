import { act, useState } from 'react'

const Button = ({ click, text }) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return ( 
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ clicks, totalClicks, average, positive }) => {
  return (
    <div>
      <b>Statistics</b>
      <table>
        <tbody>
        <StatisticLine text='Good' value={clicks.good} />
        <StatisticLine text='Neutral' value={clicks.neutral} />
        <StatisticLine text='Bad' value={clicks.bad} />
        <StatisticLine text='All' value={totalClicks} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={`${positive}%`}  />
        </tbody>
      </table>
    </div>
  )
}

const History = ({ clicks, totalClicks, average, positive }) => {
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
        <Button click={handleGoodClick} text='Good' />
        <Button click={handleNeutralClick} text='Neutral' />
        <Button click={handleBadClick} text='Bad' />
      </div>
      <History clicks={clicks} totalClicks={totalClicks} average={average} positive={positive} />
    </div>
  )
}

export default App