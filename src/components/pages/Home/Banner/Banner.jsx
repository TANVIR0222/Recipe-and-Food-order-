import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 text-left mx-4 md:w-full items-center justify-center">
        <div className="">
          {/* <h1 className="bg-white w-fit rounded -mt-3">Featured Recipe</h1> */}
          <img
            className=" object-contain rounded"
            src="https://uploads-ssl.webflow.com/63a5a105581f4debc72a5ae5/63a855db60216ae982900718_Pineapple%20Smoked%20Jackfruit%20Pizza.webp"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-5xl leading-9 md:leading-relaxed ">
            Pineapple + Smoked Jackfruit Pizza
          </h1>
          <p className="leading-6 truncate text-wrap md:leading-7 my-2 text-left">
            Lorem ipsum dolor sit amet consectetur.Praesent mattis <br /> nibh
            vesitbulum euismod morbi ullamcorper return.Orci <br /> cras in
            phasellus ultricies{" "}
          </p>
          <Link to={"/recipe"}>
            <Button className="my-5" color="light">
              View Recipe
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
