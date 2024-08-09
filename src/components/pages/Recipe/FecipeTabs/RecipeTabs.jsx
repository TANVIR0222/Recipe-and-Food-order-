import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RecipeCard from "../../Home/RecipeList/RecipeCard";
import useMenu from "../../../../Hooks/useRecipe";
import { useParams } from "react-router-dom";

const RecipeTabs = () => {
  // const [menu, setMenu] = useState([]);

  const categorise = [
    "Entrees",
    "Breakfast",
    "Lunch",
    "Desserts",
    "Sides",
    "Drinks",
  ];
  const { categoey } = useParams();
  const inatialIndex = categorise.indexOf(categoey);

  const [value, setValue] = React.useState(inatialIndex);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [menu] = useMenu();
  const Entrees = menu.filter((item) => item.category === "Entrees");
  const Breakfast = menu.filter((item) => item.category === "Breakfast");
  const Lunch = menu.filter((item) => item.category === "Lunch");
  const Desserts = menu.filter((item) => item.category === "Desserts");
  const Sides = menu.filter((item) => item.category === "Sides");
  const Drinks = menu.filter((item) => item.category === "Drinks");

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab value={0} label="salad" />
          <Tab value={1} label="soup" />
          <Tab value={2} label="dessert" />
          <Tab value={3} label="pizza" />
          <Tab value={4} label="drinks" />
          <Tab value={5} label="drinks" />
        </Tabs>
      </Box>
      <div className="">
        <div className="flex flex-col">
          <li
            className={`${value === 0 ? "show" : "hidden"} grid md:grid-cols-4`}
          >
            {Entrees.map((items) => (
              <RecipeCard key={items._id} items={items} />
            ))}
          </li>
        </div>
      </div>
      <div className="flex flex-col">
        <li
          className={`${value === 1 ? "show" : "hidden"} grid md:grid-cols-4`}
        >
          {Desserts.map((items) => (
            <RecipeCard key={items._id} items={items} />
          ))}
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className={`${value === 2 ? "show" : "hidden"} grid md:grid-cols-4`}
        >
          {Lunch.map((items) => (
            <RecipeCard key={items._id} items={items} />
          ))}
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className={`${value === 3 ? "show" : "hidden"} grid md:grid-cols-4`}
        >
          {Breakfast.map((items) => (
            <RecipeCard key={items._id} items={items} />
          ))}
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className={`${value === 4 ? "show" : "hidden"} grid md:grid-cols-4`}
        >
          {Sides.map((items) => (
            <RecipeCard key={items._id} items={items} />
          ))}
        </li>
      </div>
      <div className="flex flex-col">
        <li
          className={`${value === 5 ? "show" : "hidden"} grid md:grid-cols-4`}
        >
          {Drinks.map((items) => (
            <RecipeCard key={items._id} items={items} />
          ))}
        </li>
      </div>
    </div>
  );
};

export default RecipeTabs;
