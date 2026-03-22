import { useRef, useState } from 'react'
import { useGameState } from './hooks/useGameState.js'
import { Board } from './components/Board.jsx'
import { GameStatus } from './components/GameStatus.jsx'
import { PlayerSetup } from './components/PlayerSetup.jsx'
import { Scoreboard } from './components/Scoreboard.jsx'

const AMBIENT_MP3 = 'https://cdn.freesound.org/previews/410/410574_625529-lq.mp3'

function useAmbientMusic() {
  const audioRef = useRef(null)

  const startMusic = () => {
    if (!audioRef.current) {
      const audio = new Audio(AMBIENT_MP3)
      audio.loop = true
      audio.volume = 0.3
      audioRef.current = audio
    }
    const audio = audioRef.current
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  return { startMusic, stopMusic }
}

function MusicToggle({ enabled, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={enabled ? 'Mute music' : 'Play music'}
      className="fixed p-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 active:bg-slate-600 text-slate-400 hover:text-slate-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      style={{ top: 'max(1rem, env(safe-area-inset-top))', right: 'max(1rem, env(safe-area-inset-right))' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        {enabled ? (
          <path d="M11 5L6 9H2v6h4l5 4V5zm13.07 4.93l-1.41 1.41C19.14 12.5 20 14.14 20 16s-.86 3.5-2.34 4.66l1.41 1.41C21.32 20.43 22 18.27 22 16s-.68-4.43-2.07-6.07zM15.54 5.54l-1.41 1.41a5 5 0 0 1 0 7.1l1.41 1.41a7 7 0 0 0 0-9.92z" />
        ) : (
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
        )}
      </svg>
    </button>
  )
}

export default function App() {
  const [musicEnabled, setMusicEnabled] = useState(false)
  const { startMusic, stopMusic } = useAmbientMusic()

  const handleMusicToggle = () => {
    if (musicEnabled) {
      stopMusic()
      setMusicEnabled(false)
    } else {
      startMusic()
      setMusicEnabled(true)
    }
  }

  const [players, setPlayers] = useState(null)
  const { board, currentPlayer, winner, winningLine, scores, makeMove, reset } = useGameState()

  if (!players) {
    return (
      <main className="min-h-[100dvh] min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <MusicToggle enabled={musicEnabled} onToggle={handleMusicToggle} />
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8">
          Noughts & Crosses
        </h1>
        <PlayerSetup
          onStart={setPlayers}
          player1Label="Player 1"
          player2Label="Player 2"
        />
      </main>
    )
  }

  return (
    <main className="min-h-[100dvh] min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto pb-[env(safe-area-inset-bottom)]">
      <MusicToggle enabled={musicEnabled} onToggle={handleMusicToggle} />

      <h1 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-2 text-center">
        Noughts & Crosses
      </h1>
      <p className="text-slate-500 text-sm mb-4 text-center">Take turns. Get three in a row.</p>
      <button
        type="button"
        onClick={() => setPlayers(null)}
        className="min-h-[44px] px-4 py-2 text-sm text-slate-500 hover:text-slate-400 active:text-slate-300 mb-2 transition-colors -m-2"
      >
        Change names
      </button>

      <Scoreboard
        player1Name={players.player1}
        player2Name={players.player2}
        scores={scores}
      />

      <GameStatus
        currentPlayer={currentPlayer}
        winner={winner}
        onReset={reset}
        player1Name={players.player1}
        player2Name={players.player2}
      />

      <div className="mt-6 sm:mt-8 w-full max-w-[min(100%,320px)]">
        <Board
          board={board}
          winningLine={winningLine}
          onMove={makeMove}
          disabled={!!winner}
        />
      </div>
    </main>
  )
}
