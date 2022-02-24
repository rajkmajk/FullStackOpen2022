import React, {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setAllVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleRandomClick = () => {
    const anyNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(anyNum)
  }

  const handleVoteClick = () => {
    const vote = [...votes]
    vote[selected] += 1
    setAllVotes(vote)
  }

  const maxVoted = () => {
    let max = 0
    let maxIndex = 0
    votes.forEach((item, index) => {
      if (item > max) {
        max = item
        maxIndex = index
      }
    })
    return maxIndex
  }

  return (
    <>
      <h2>Anecdote of the day: </h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleRandomClick} text="next anecdote" />
      <h2>Anecdote with most votes: </h2>
      {votes[maxVoted()] === 0 ?
        <>
          <p>Votes will be placed here. </p>
        </>
        :
        <>
          <p>{anecdotes[maxVoted()]}</p>
          <p>has {votes[maxVoted()]} votes</p>
        </>
      }
    </>
  )
}

export default App