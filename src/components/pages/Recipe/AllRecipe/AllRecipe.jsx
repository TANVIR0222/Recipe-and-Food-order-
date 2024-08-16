import useRecipe from "../../../../Hooks/useRecipe";

const AllRecipe = () => {
    const [menu]  = useRecipe()
    return (
        <div>
            <h1>{menu.length}</h1>
        </div>
    );
};

export default AllRecipe;