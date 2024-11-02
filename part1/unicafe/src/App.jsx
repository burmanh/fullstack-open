import { useState } from 'react'

//TO DO 

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <>
      <h1>Unicafé</h1>
      
      <h2>Give Feedback</h2>
      <button onClick={increaseGood}>
        good
      </button>
      <button onClick={increaseNeutral}>
        neutral
      </button>
      <button onClick={increaseBad}>
        bad
      </button>

      <h2>Statistics</h2>
      <p>good = {good}</p>
      <p>neutral = {neutral}</p>
      <p>bad = {bad}</p>
    </>
  )
}

export default App