import { useOutletContext } from "react-router-dom";
import GamesList from "src/components/GamesList/GamesList";
import Info from "src/components/Info/Info";

const GamesHome = () => {
  const { games, error, isLoading } = useOutletContext<any>();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Info></Info>
          <div className="col-12 col-sm-8 col-md-9">
            <GamesList
              games={games}
              error={error}
              isLoading={isLoading}
            ></GamesList>
          </div>
        </div>

      </div>
      {/* <SignupForm></SignupForm> */}
    </>
  );
}

export default GamesHome;