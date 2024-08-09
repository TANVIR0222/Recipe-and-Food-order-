import { useLoaderData } from "react-router-dom";

const Viewpage = () => {
  const service = useLoaderData();
  const {
    name1,
    quantity1,
    name2,
    quantity2,
    name3,
    quantity3,
    name4,
    quantity4,
    name5,
    quantity5,
    source,
    difficulty,
    prep_time,
    cook_time,
    category,
    name,
    thumbnail_image,
  } = service;
  return (
    <div className="w-3/4 mx-auto my-10 shadow-blue-600 shadow-2xl bg-white p-4">
      <div>
        <img className=" object-contain rounded my-4" src={thumbnail_image} alt="" />
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
        </div>
        <div className="bg-[#5B99C2] w-fit p-2 rounded hover:rounded-full text-white my-5">
          <h1>{category}</h1>
        </div>

        <div className="my-10">

          <h2 className="text-xl font-semibold">Instructions</h2>
          <div className="ml-3 leading-7">
          <li>2 slices of whole-grain bread</li>
          <li>1 ripe avocado</li>
          <li>1 tbsp lemon juice</li>
          <li>Salt and pepper (to taste)</li>
          <li>
            Optional toppings: cherry tomatoes, radishes, red pepper flakes
          </li>
        </div>
        </div>
        <div className="my-10">
          <h2 className=" text-2xl font-semibold">Ingredients</h2>
          <div className="ml-3 leading-7">
            <li>{name1 + ": " + quantity1}</li>
            <li>{name2 + ": " + quantity2}</li>
            <li>{name3 + ": " + quantity3}</li>
            <li>{name4 + ": " + quantity4}</li>
            <li>{name5 + ": " + quantity5}</li>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-xl font-semibold">Preparations Time</h1>
          <div className="ml-3 leading-7">
            <p>
              <strong>Prep Time:</strong> {prep_time}
            </p>
            <p>
              <strong>Cook Time:</strong>
              {cook_time}{" "}
            </p>
            <p>
              <strong>Difficulty:</strong> {difficulty}
            </p>
            <p>
              <strong>Source:</strong> {source}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewpage;
