import { Outlet, useLocation } from "react-router-dom";
import Footers from "../components/shared/Footers";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const MainRoute = () => {
  const hiddenHeader = useLocation().pathname.includes("singin");
  const hiddenFooter = useLocation().pathname.includes("singup");
  return (
    <div>
      {hiddenFooter ||hiddenHeader || <Header></Header>}
      <Outlet></Outlet>
      {hiddenFooter || hiddenHeader || <SubFooter></SubFooter>}
      {hiddenFooter || hiddenHeader || <Footers></Footers>}
    </div>
  );
};

export default MainRoute;
