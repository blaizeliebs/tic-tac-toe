export function GameStatus({ currentPlayer, winner, onReset, player1Name, player2Name }) {
  const gameOver = !!winner
  const currentPlayerName = currentPlayer === 'X' ? player1Name : player2Name
  const winnerName = winner === 'X' ? player1Name : winner === 'O' ? player2Name : null

  const statusText = gameOver
    ? winner === 'draw'
      ? "It's a draw!"
      : `${winnerName} wins!`
    : `${currentPlayerName}'s turn`

  const statusColor = gameOver
    ? winner === 'draw'
      ? 'text-slate-400'
      : winner === 'X'
        ? 'text-cyan-400'
        : 'text-fuchsia-400'
    : currentPlayer === 'X'
      ? 'text-cyan-400'
      : 'text-fuchsia-400'

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      <p className={`text-lg sm:text-2xl font-semibold ${statusColor} transition-colors duration-200 text-center break-words px-2`}>
        {statusText}
      </p>
      {gameOver && (
        <button
          type="button"
          onClick={onReset}
          className="px-6 py-3 min-h-[44px] rounded-xl bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-slate-100 font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Play Again
        </button>
      )}
    </div>
  )
}
