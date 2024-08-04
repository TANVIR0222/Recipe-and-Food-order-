
const Newsweek = () => {
  return (
    <div className="text-center  my-20">
      <div>
        <h1 className="text-xl md:text-3xl my-8 text-black">Sing up for my weekly newsletter!</h1>
        <p className="text-gray-500 my-4">
          Weekly email with my latest recipe cooking tips and tricks and product
          recommendations! <br /> You'll be set up in minutes
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className=" mx-4 grid-cols-1">
          <input
            className="w-96 my-3 text-black mx-2 h-16 rounded-md   bg-slate-100 "
            type="text"
            placeholder="Name"
            required
            color="gray"
          />
          <input
            className="w-96 my-3 mx-2 h-16 rounded-md  bg-slate-100"
            type="email"
            placeholder="Email"
            required
            color="gray"
          />
          <button className="bg-blue-600 border-black border-2 text-white p-5 rounded-md">Get Started</button>
        </div>
        
      </div>
    </div>
  );
};

export default Newsweek;
