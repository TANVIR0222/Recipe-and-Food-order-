import { Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

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
  return (
    <div className="">
      <Navbar fluid rounded className="bg-slate-200 z-10">
        <Navbar.Brand href="/">
          <span className="text-2xl  uppercasefont-bold">Recipe and Food</span>
        </Navbar.Brand>
          <div className="flex md:order-2">
          {
            user? <>
            <Button onClick={handleLogout}>LogOut</Button>
            </>:
            <>
            <Link to={'/singin'} ><Button>Log in</Button></Link>
            </>
          }
          <Navbar.Toggle />
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
