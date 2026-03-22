import { useState, useCallback, useEffect } from 'react'

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],            // diagonals
]

function checkWinner(board) {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winningLine: [a, b, c] }
    }
  }
  const isDraw = board.every(Boolean)
  return { winner: isDraw ? 'draw' : null, winningLine: null }
}

export function useGameState() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 })
  const [lastScoredWinner, setLastScoredWinner] = useState(null)

  const { winner, winningLine } = checkWinner(board)

  useEffect(() => {
    if (winner && winner !== lastScoredWinner) {
      setScores((s) => ({ ...s, [winner]: s[winner] + 1 }))
      setLastScoredWinner(winner)
    }
  }, [winner, lastScoredWinner])

  const makeMove = useCallback((index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)
    setCurrentPlayer((p) => (p === 'X' ? 'O' : 'X'))
  }, [board, currentPlayer, winner])

  const reset = useCallback(() => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
    setLastScoredWinner(null)
  }, [])

  return {
    board,
    currentPlayer,
    winner,
    winningLine: winningLine ?? [],
    scores,
    makeMove,
    reset,
  }
}
