import { useOutletContext } from "react-router-dom";
import Events from "src/components/Events";
import Info from "src/components/Info/Info";

const TicketMasterHome = () => {
  const { search } = useOutletContext<any>();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Info></Info>
          <div className="col-12 col-sm-8 col-md-9">
            <Events
              search={search}
            ></Events>
          </div>
        </div>

      </div>
      {/* <SignupForm></SignupForm> */}
    </>
  );
}

export default TicketMasterHome;