import { Outlet, useLocation } from "react-router-dom";
import Footers from "../components/shared/Footers";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const MainRoute = () => {
  const location = useLocation();
  const hiddenHeader =
    location.pathname.includes("singin") ||
    location.pathname.includes("singup");

  return (
    <div>
      {hiddenHeader || <Header></Header>}
      <Outlet></Outlet>
      {hiddenHeader || <SubFooter></SubFooter>}
      {hiddenHeader || <Footers></Footers>}
    </div>
  );
};

export default MainRoute;
