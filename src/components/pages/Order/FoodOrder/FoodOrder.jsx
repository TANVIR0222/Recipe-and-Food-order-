import { Helmet } from "react-helmet-async";
import OrderBanner from "../OrderBanner/OrderBanner";
import OrdeFood from "../ViewCard/OrdeFood";

const FoodOrder = () => {
    return (
        <div>
            <Helmet>
                <title>Food Order</title>
            </Helmet>
            <OrderBanner></OrderBanner>
            <OrdeFood></OrdeFood>
        </div>
    );
};

export default FoodOrder;