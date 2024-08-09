import {  Card } from "flowbite-react";
import { Link } from "react-router-dom";

const RecipeCard = ({ items }) => {
  const { _id,thumbnail_image, name, category } = items;
  return (
    <>
      <div>
        <Card
          className="mx-2 my-2 md:my-10 hover:shadow-xl hover:shadow-blue-600"
          renderImage={() => (
            <img width={500} height={500} src={thumbnail_image} alt="image 1" />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex items-center justify-between">
            <h4 className="bg-yellow-100 w-fit p-2 rounded-md">{category}</h4>
            <Link to={`/checkout/${_id}`} >
            <button className="bg-[#EECAD5] px-2 py-2 rounded hover:rounded-full">View now</button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RecipeCard;
