import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentIcon from "@mui/icons-material/Payment";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import { Divider } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const [cart] = useCarts();
  const { user } = useAuth();
  return (
    <div>
      <Box>
        <AppBar sx={{ marginLeft: 5 }}>
          <Toolbar>
            <div className="flex w-full items-center justify-around">
                <div className="">
                  <h1 className="text-3xl">{user?.displayName}</h1>
                </div>
              <img className="w-16 rounded-full text-end" src={user?.photoURL} alt="" />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex">
        <div className="w-72 mt-20 flex flex-col gap-5  shadow-lg shadow-rose-400 ">
          <div className="w-72  flex  flex-col gap-5  text-left min-h-screen">
            <span className=" mt-5 rounded">
              <NavLink to="/dashboard/home">
                {" "}
                <span className="mr-3  text-center">
                  <HomeOutlinedIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>{" "}
                Our Home{" "}
              </NavLink>
            </span>

            <span className="   rounded">
              <NavLink to="/dashboard/reservation">
                <span className="mr-3    text-center">
                  <CalendarMonthIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>
                reservation
              </NavLink>
            </span>
            <span className="   rounded">
              <NavLink to="/dashboard/paymentHistory">
                <span className="mr-3     text-center">
                  <PaymentIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>
                Payment History
              </NavLink>
            </span>
            <span className="   rounded">
              <NavLink to="/dashboard/cart">
                <span className="mr-3    text-center">
                  <AddShoppingCartIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>
                My Cart - ({cart.length})
              </NavLink>
            </span>
            <span className="   rounded">
              <NavLink to="/dashboard/review">
                <span className="mr-3    text-center">
                  <AddReactionIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>
                add review
              </NavLink>
            </span>
            <span className="   rounded">
              <NavLink to="/dashboard/payment">
                <span className="mr-3    text-center">
                  <BookmarkAddedIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>
                my Booking
              </NavLink>
            </span>
            <Divider sx={{ margin: 3 }}></Divider>
            <span className=" rounded">
              <NavLink to="/">
                {" "}
                <span className="mr-3   text-center">
                  <HomeOutlinedIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>{" "}
                Home{" "}
              </NavLink>
            </span>
            <span className=" rounded">
              <NavLink to="/order/:category'">
                {" "}
                <span className="mr-3   text-center">
                  <MenuIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>{" "}
                Menu{" "}
              </NavLink>
            </span>
            <span className=" rounded">
              <NavLink to="/contact">
                {" "}
                <span className="mr-3   text-center">
                  <EmailIcon
                    color="primary"
                    sx={{ fontSize: 30, marginLeft: 3 }}
                  />
                </span>{" "}
                Contact{" "}
              </NavLink>
            </span>
          </div>
        </div>
        <div className="flex-1 p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;
