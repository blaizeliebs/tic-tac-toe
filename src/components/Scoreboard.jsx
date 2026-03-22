export function Scoreboard({ player1Name, player2Name, scores }) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-10 py-4 px-4 sm:px-6 rounded-xl bg-slate-800/50 border border-slate-700/50 w-full max-w-sm">
      <div className="flex flex-col items-center min-w-0 flex-1">
        <span className="text-sm text-slate-400">X</span>
        <span className="font-semibold text-cyan-400 truncate max-w-full text-center" title={player1Name}>{player1Name}</span>
        <span className="text-2xl font-bold text-slate-100 mt-1">{scores.X}</span>
      </div>
      <div className="flex flex-col items-center text-slate-500 flex-shrink-0">
        <span className="text-sm">Draws</span>
        <span className="text-xl font-bold">{scores.draw}</span>
      </div>
      <div className="flex flex-col items-center min-w-0 flex-1">
        <span className="text-sm text-slate-400">O</span>
        <span className="font-semibold text-fuchsia-400 truncate max-w-full text-center" title={player2Name}>{player2Name}</span>
        <span className="text-2xl font-bold text-slate-100 mt-1">{scores.O}</span>
      </div>
    </div>
  )
}
