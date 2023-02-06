import Card from "../UI/Card"

interface GameProps {
  game: {
    name: string;
    imgUrl: string;
  }
  onBuy: () => void;
}

const Game = (props: GameProps) => {
  return (
    <Card title={props.game.name}>
      <img width="100%" src={props.game.imgUrl} alt={props.game.name} />
      <button onClick={() => props.onBuy()}>Comprar</button>
    </Card>
  )
}

export default Game
