import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (good === 0 & neutral === 0 & bad === 0) {
    return (
      <p>No feedback given.</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr><Statistic text="good" value={good} /></tr>
        <tr><Statistic text="neutral" value={neutral} /></tr>
        <tr><Statistic text="bad" value={bad} /></tr>
        <tr><Statistic text="all" value={all} /></tr>
        <tr><Statistic text="average" value={average} /></tr>
        <tr><Statistic text="positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => {
  return (
    <td>
      {text} 
      {value}
      </td>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>
    setGood(good + 1)

  const handleNeutral = () =>
    setNeutral(neutral + 1)

  const handleBad = () =>
    setBad(bad + 1)

  const all = good + neutral + bad
  const average = ((good - bad) / all) * 100
  const positive = (good / all) * 100

  return (
    <>
      <h1>Give feedback:</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>Statistics: </h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </>
  )
}

export default App