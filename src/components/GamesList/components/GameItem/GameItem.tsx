import { MouseEventHandler } from "react";
import gameItemStyles from './GameItem.module.css';


const GameItem = ({ gameItem, onGameItemClick }: { gameItem: any, onGameItemClick: MouseEventHandler }) => {
  return (
    <div className="col">
      <div className={`${gameItemStyles.card} card p-0`}>
        {/* <img src={gameItem.images[0].url} alt={gameItem.name} className={`card-img-top`} /> */}
        <div className={`${gameItemStyles.imageContainer} card-img-top `}>
          <img src={gameItem.background_image} alt={gameItem.name} className={`${gameItemStyles.fitImage}`} />
        </div>
        <div className={`${gameItemStyles.cardBody}`}>
          <h3 className="card-title">
            {gameItem.name}
            <span className="ms-2 badge bg-blue-lt rounded-5">
              {gameItem.released}
            </span>
          </h3>
          <div className="d-grid">
            <button type="button" onClick={onGameItemClick} className={`${gameItemStyles.button}`}>Ver más</button>
            {/* <Link to={`./game/${gameItem.id}`}>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameItem;