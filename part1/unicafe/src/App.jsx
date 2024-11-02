import { useState } from 'react'

//TO DOO
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//TO DOO
const goodClick = () => {
  const newClick = { 
    left: clicks.left + 1, 
    right: c
  }
  setGood(newClicks)
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
 
    <h1>Statistics</h1>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
    </>
  )
}

export default App