import {  Card } from "flowbite-react";
import { FaRegClock } from "react-icons/fa6";

const RecipeCard = ({ items }) => {
  const { thumbnail_image, name, category } = items;
  return (
    <>
      <div>
        <Card
          className="mx-2 my-2 md:my-10"
          renderImage={() => (
            <img width={500} height={500} src={thumbnail_image} alt="image 1" />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex items-center justify-between">
            <h4>{category}</h4>
            <p className="flex items-center gap-3">
              <FaRegClock /> 30 minutes
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RecipeCard;
