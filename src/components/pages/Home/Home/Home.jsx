import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import RecipeList from "../RecipeList/RecipeList";
import Newsweek from "../Newsweek/Newsweek";
import AboutSection from "../AboutSection/AboutSection";

const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <RecipeList></RecipeList>
            <Newsweek></Newsweek>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;