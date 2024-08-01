import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="px-5 xl:px-10  mb-10">
      <h1 className=" mt-6 mb-10 text-4xl xl:text-5xl text-center  font-bold text-gray-500 leading-normal xl:leading-relaxed">
        A blog template made <br /> for food <span className="text-orange-400">influencers</span>
      </h1>
      <form action="/search" className=" items-center text-center flex justify-center">

        <TextInput
        name="query"
        type="search"
        placeholder="Search for recipes..."
        className="w-full xl:w-1/2 xl:mr-6 xl:mb-0"
        />
      </form>
    </div>
  );
};

export default Hero;
