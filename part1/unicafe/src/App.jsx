import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;

  return (
    <>
      <h2>Statistics</h2>
      <p>good  {props.good}</p>
      <p>neutral  {props.neutral}</p>
      <p>bad  {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {(props.good - props.bad) / total}</p>
      <p>positive {Math.round(props.good / total * 100 * (100)) / 100} % </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const total = good + neutral + bad;

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
      <Statistics good={good} neutral={neutral} bad={bad} />

    </>
  )
}

export default App