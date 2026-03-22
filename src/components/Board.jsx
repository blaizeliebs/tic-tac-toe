import { Cell } from './Cell.jsx'

export function Board({ board, winningLine, onMove, disabled }) {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-3 p-2 sm:p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 shadow-xl w-full">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onMove(index)}
          isWinning={winningLine.includes(index)}
          disabled={disabled}
        />
      ))}
    </div>
  )
}
