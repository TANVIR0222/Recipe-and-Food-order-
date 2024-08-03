import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Button } from "flowbite-react";

const RecipeList = () => {
  const [recipes, setrecipes] = useState([]);
  useEffect(() => {
    fetch("latest.json")
      .then((response) => response.json())
      .then((data) => setrecipes(data));
  }, []);
  return (
    <div className="my-5 md:my-14 ">
      <div>
        <h1 className="text-5xl">Latest Recipe </h1>
      </div>
      <div className="grid md:grid-cols-4">
        
        {recipes.map((items) => (
          <RecipeCard key={items} items={items}></RecipeCard>
        ))}
      </div>
      <Button className="mx-auto border-black border-2" color="purple">
        View All Reacipe
      </Button>
    </div>
  );
};

export default RecipeList;
