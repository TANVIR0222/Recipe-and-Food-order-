import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const{category} = useParams();
    return (
        <div className="px-6 lg:py-12 py-20">
           {category}
        </div>
    );
};

export default CategoryPage;