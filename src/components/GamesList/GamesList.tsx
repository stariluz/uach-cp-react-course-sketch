import { MouseEventHandler } from "react";
import GameItem from "./components/GameItem/GameItem";
import { useNavigate } from "react-router-dom";

// import gamesListSyle from './GamesList.modules.css';

const GamesList = (
  { games, error, isLoading }:
    { games: any, error: any, isLoading: boolean }
) => {

  const navigate = useNavigate();
  const handleGameItemClick: MouseEventHandler = (id: any) => {
    console.log(id);
    navigate(`./${id.toString()}`);
  }
  const renderItems = (): JSX.Element => {
    const filteredGameItems = games.map((game: any) => {
      return <GameItem
        key={`games-game-item-${game.id}`}
        gameItem={game}
        onGameItemClick={() => handleGameItemClick(game.id)}
      />
    });
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-sm-3 g-md-4 ">
      {filteredGameItems}
    </div>
  }
  return (
    <div className="">
      {
        isLoading ?
          <p>
            Cargando contenido...
          </p>
          : error ?
            <p>
              Algo salió mal D:
            </p>
            :
            renderItems()
      }
    </div>
  )
}
export default GamesList;