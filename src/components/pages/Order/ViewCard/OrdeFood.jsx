import useOrder from "../../../../Hooks/useOrder";
import OrderCards from "../OrderCards/OrderCards";

const OrdeFood = () => {
  const [orders] = useOrder();

  return (
    <div className="">
      <div className="grid md:grid-cols-4">
        {orders.map((items) => (
          <OrderCards key={items._id} items={items}></OrderCards>
        ))}
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default OrdeFood;
