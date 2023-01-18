import { useState } from 'react'
import { GameI } from '../../../fakeApi/types'
import Card from '../UI/Card'
import Timer from './Timer'

interface GameProps {
  game: GameI
  onBuy: (game: GameI) => void
}

const Game = (props: GameProps) => {
  const [playing, setPlaying] = useState(false)
  return (
    <Card title={props.game.name}>
      <img
        width='100%'
        src={props.game.imgUrl}
        alt={props.game.name}
      />
      <button onClick={() => props.onBuy(props.game)}>Comprar</button>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Detener' : 'Jugar'}
      </button>
      {playing ? <Timer /> : null}
    </Card>
  )
}

export default Game
