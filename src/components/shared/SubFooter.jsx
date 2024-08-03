import { Footer } from "flowbite-react";

const SubFooter = () => {
  return (
    <div className="my-1">
      <Footer container>
        <div className="">
          <h1 className="text-xl md:text-4xl ">subscribe to our newlatters,</h1>
          <p className="text-sm leading-7 text-gray-600">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. <br /> Duis tempor incididunt dolore.
          </p>
        </div>
        <Footer.LinkGroup>
          <div className="flex items-center justify-center">
            <div className="">
              <input
                className="w-80 my-3 h-14 rounded-md  bg-slate-100"
                type="email"
                placeholder="Email"
                required
                color="gray"
              />
              <button className="bg-blue-600 md:ml-3 text-white p-5 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default SubFooter;
