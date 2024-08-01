import { useParams } from "react-router-dom";
import CatagoryWarpper from "./CatagoryWarpper";

const CategoryPage = () => {
    const{category} = useParams();
    return (
        <div className="px-6 lg:py-12 py-20">
           <h1 className=" capitalize text-center text-3xl py-10 font-semibold text-black sm:text-6xl sm:leading-relaxed">
           {category}
           </h1>
           <CatagoryWarpper/>
        </div>
    );
};

export default CategoryPage;