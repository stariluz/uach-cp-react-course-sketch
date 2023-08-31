import { Outlet, useOutletContext } from "react-router-dom";
const TicketMaster = () => {
  const { search } = useOutletContext<any>();
  return <>
    <Outlet context={{ search }}></Outlet>
  </>
}
export default TicketMaster;