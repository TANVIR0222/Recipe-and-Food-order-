import { Outlet } from "react-router-dom";
import Footers from "../components/shared/Footers";
import Header from "../components/shared/Header";
import SubFooter from "../components/shared/SubFooter";

const MainRoute = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <SubFooter></SubFooter>
            <Footers></Footers>
        </div>
    );
};

export default MainRoute;