import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div>
      {/* main footer */}
      <div className="grid gap-8 md:grid-cols-2 text-left mx-4 md:w-full items-center justify-center">
        <div className="">
          {/* <h1 className="bg-white w-fit rounded -mt-3">Featured Recipe</h1> */}
          <img
            className=" object-contain rounded"
            src="about-image.jpg"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-4xl leading-7 md:leading-relaxed">
            Vegan foodie who lovers experiment with recipe
          </h1>
          <p className="leading-6 truncate text-wrap md:leading-8 my-2 text-left">
            Lorem ipsum dolor sit amet consectetur. Mauris at in luctus faucibus
            at fermentum velit duis amet. Dolor vitae porta ac eget consequat a
            nulla bibendum. Velit placerat urna adipiscing sociis a. Urna lacus
            commodo adipiscing est magna mi nullam sit. Tellus sagittis urna et
            mauris amet odio at non.
          </p>
          <Link to={"/recipe"}>
            <Button className="my-5" color="blue">
              View Recipe
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center text-xl">
          Trusted by world's most innovative teams
        </h1>
        <div className="flex gap-5 md:gap-20 my-8 items-center justify-center">
          <img className="w-20" src="google.png" alt="" />
          <img className="w-16" src="teligram.png" alt="" />
          <img className="w-16" src="apple.png" alt="" />
          <img className="w-16" src="facebook.png" alt="" />
          <img className="w-16" src="netflix.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
