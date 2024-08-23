import { Helmet } from "react-helmet-async";
import RecipeTabs from "../FecipeTabs/RecipeTabs";
import RecipeBanner from "../RecipeBanner/RecipeBanner";

const RecipeHome = () => {
    return (
        <div>
            <Helmet>
                <title>Recipe Home</title>
            </Helmet>
            <RecipeBanner></RecipeBanner>
            <RecipeTabs></RecipeTabs>
        </div>
    );
};

export default RecipeHome;