import RecipeTabs from "../FecipeTabs/RecipeTabs";
import RecipeBanner from "../RecipeBanner/RecipeBanner";

const RecipeHome = () => {
    return (
        <div>
            <RecipeBanner></RecipeBanner>
            <RecipeTabs></RecipeTabs>
        </div>
    );
};

export default RecipeHome;