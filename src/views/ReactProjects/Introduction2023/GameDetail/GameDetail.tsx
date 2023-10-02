import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { gameId } = useParams();
  console.log(gameId);

  return (
    <div>
      {gameId}
    </div>
  )
}
export default GameDetail;