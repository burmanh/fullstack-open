import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
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
  const total = good+neutral+bad;

  return (
    <>
      <h1>Unicafé</h1>

      <h2>Give Feedback</h2>
      <Button
        onClick={increaseGood}
        text='good'
      />
      <Button
        onClick={increaseNeutral}
        text='neutral'
      />
      <Button
        onClick={increaseBad}
        text='bad'
      />

      <h2>Statistics</h2>
      <p>good = {good}</p>
      <p>neutral = {neutral}</p>
      <p>bad = {bad}</p>
      <p>all {total}</p>
      <p>average {(good-bad)/total}</p>
      <p>positive {Math.round(good/total*100*(100))/100} % </p>
    </>
  )
}

export default App