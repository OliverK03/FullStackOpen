import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)



  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = clicks.left + 1
    console.log('left before', updatedLeft)
    setClicks({ ...clicks, left: updatedLeft})
    console.log('left after', updatedLeft)
    setTotal(updatedLeft + clicks.right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = clicks.right + 1
    console.log('right before', updatedRight)
    setClicks({ ...clicks, right: updatedRight})
    console.log('right after', updatedRight)
    setTotal(clicks.left + updatedRight)
  }
  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
        <History allClicks={allClicks} />
        <p>Total clicks: {total}</p>
      </div>
    </div>
  )
}
  export default App