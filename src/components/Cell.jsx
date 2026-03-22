export function Cell({ value, onClick, isWinning, disabled }) {
  const isEmpty = !value
  const canInteract = isEmpty && !disabled

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!canInteract}
      className={`
        relative aspect-square min-w-[64px] min-h-[64px] sm:min-w-[96px] sm:min-h-[96px]
        rounded-xl border-2 transition-all duration-200
        flex items-center justify-center
        ${canInteract
          ? 'border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer'
          : 'border-slate-700 cursor-default'
        }
        ${isWinning ? 'animate-pulse-win text-cyan-400 border-cyan-400' : ''}
      `}
    >
      {value === 'X' && (
        <span className="text-4xl sm:text-5xl font-bold text-cyan-400 animate-cell-fill drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          ×
        </span>
      )}
      {value === 'O' && (
        <span className="text-4xl sm:text-5xl font-bold text-fuchsia-400 animate-cell-fill drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">
          ○
        </span>
      )}
    </button>
  )
}
