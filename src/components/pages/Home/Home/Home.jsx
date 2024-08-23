import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import RecipeList from "../RecipeList/RecipeList";
import Newsweek from "../Newsweek/Newsweek";
import AboutSection from "../AboutSection/AboutSection";
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero></Hero>
            <Banner></Banner>
            <RecipeList></RecipeList>
            <Newsweek></Newsweek>
            <AboutSection></AboutSection>
        </div>
    );
};

export default Home;