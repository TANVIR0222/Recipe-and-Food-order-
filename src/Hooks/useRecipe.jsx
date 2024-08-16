import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRecipe = () => {
  // const [menu, setMenu] = useState([]);
  // const [loding, setLoding] = useState(true);

  const axiosPublic = useAxiosPublic();

  const {data : menu = [] } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const menu = await axiosPublic.get('/recipeMenu')
      return menu.data
    },
  })
  return [menu];

};

export default useRecipe;
