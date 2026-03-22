import { useState } from 'react'

export function PlayerSetup({ onStart, player1Label, player2Label }) {
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onStart({
      player1: name1.trim() || player1Label,
      player2: name2.trim() || player2Label,
    })
  }

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-xl font-semibold text-slate-200 mb-6 text-center">
        Enter player names
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="player1" className="block text-sm text-slate-400 mb-1">
            {player1Label} (X)
          </label>
          <input
            id="player1"
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Player 1"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-base min-h-[44px]"
          />
        </div>
        <div>
          <label htmlFor="player2" className="block text-sm text-slate-400 mb-1">
            {player2Label} (O)
          </label>
          <input
            id="player2"
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Player 2"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-colors text-base min-h-[44px]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 min-h-[44px] rounded-xl bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-500 text-white font-semibold transition-colors"
        >
          Start Game
        </button>
      </form>
    </div>
  )
}
