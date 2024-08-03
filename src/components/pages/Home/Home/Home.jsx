import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import RecipeList from "../RecipeList/RecipeList";
import Newsweek from "../Newsweek/Newsweek";

const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <RecipeList></RecipeList>
            <Newsweek></Newsweek>
        </div>
    );
};

export default Home;