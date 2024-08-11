import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const Header = () => {
  const usePath = useLocation().pathname;
  const {user,logout} = useContext(AuthContext);

  const handleLogout = () =>{
    logout()
    .then(()=> {})
    .catch((err) => {
      console.log(err);
    })
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <div className="">
      <Navbar fluid rounded className="bg-slate-200 z-10">
        <Navbar.Brand href="/">
          <span className="text-2xl  uppercasefont-bold">Recipe and Food</span>
        </Navbar.Brand>
          {/* <div className="flex md:order-2">
          {
            user? <>
            <span className="text-center items-center justify-center flex" >{user?.displayName}</span>
           
            </>:
            <>
            
            </>
          }
          <Navbar.Toggle />
        </div> */}
        <div className="flex md:order-2">
        {
          user? <>
          <div className="flex items-center mr-8 md:mr-16 justify-center">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={`10`} color="secondary" >
              <ShoppingCartIcon color="red"   />
            </StyledBadge>
          </IconButton>
          </div>

          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user?.photoURL} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block text-sm">{user?.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item> <Button onClick={handleLogout}>Log Out</Button></Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
          </> : <>
          <Link to={'/singin'} ><Button>Log in</Button></Link>
          </>
        }
      </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-md  uppercase" active={usePath == "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link
            className="text-md  uppercase"
            active={usePath == "/recipe"}
            as={"div"}
          >
            <Link to="/recipe">Recipe</Link>
          </Navbar.Link>
          <Navbar.Link
            className="text-red-400 text-md  uppercase"
            active={usePath == "/order"}
            as={"div"}
          >
            <Link to={"/order"}>Order Now</Link>
          </Navbar.Link>
          <Navbar.Link
            className="text-md  uppercase"
            active={usePath == "/about"}
            as={"div"}
          >
            <Link to={"/about"}>About</Link>
          </Navbar.Link>
          <Navbar.Link
            className="text-md  uppercase"
            active={usePath == "/about"}
            as={"div"}
          >
            <Link to={"/contact"}>Contact</Link>
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
