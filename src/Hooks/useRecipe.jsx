import { useEffect, useState } from "react";

const useRecipe = () => {
  const [menu, setMenu] = useState([]);
  const [loding, setLoding] = useState(true);


  useEffect(() => {
    fetch("http://localhost:3000/recipeMenu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoding(false);
      });
  }, []);
  
  return [menu, loding];

};

export default useRecipe;
