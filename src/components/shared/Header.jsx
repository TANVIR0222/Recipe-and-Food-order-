import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="">
      <Navbar fluid rounded className="bg-slate-200 z-10">
        <Navbar.Brand href="/">
          <span className="text-xl font-bold">Recipe and Food</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <Button>Log in</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
        Home
        </Navbar.Link>
        <Navbar.Link href="/recipe">Recipe</Navbar.Link>
        <Navbar.Link href="#">Resources</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
