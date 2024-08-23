import { Card } from "flowbite-react";
import useAuth from "../../../../Hooks/useAuth";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCarts from "../../../../Hooks/useCarts";

const OrderCards = ({items}) => {
    const {image,name ,recipe,price, _id} = items

    const {user} = useAuth();
    const [,refetch] = useCarts();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddTocard = () =>{

      if(user && user?.email){
        // todo 
        const order = {
          menuId: _id,
          email:user.email,
          name,
          image,
          price,
        }
        axiosSecure.post('/carts',order)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              title: 'Order Added Successfully',
              text: `Your order has been added to the cart ${name}`,
              icon: 'success',
              showConfirmButton: false,
              timer:'1500'
            })
            // update to the cart data 
            refetch();
          }
      })
      }else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login add to the cart?",
          icon: "warning",

          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/singin', {state: {form : location}} )
          }
        });
      }
    }
    return (
        <div className=" leading-6">
          <Card
          className="mx-2 h-[450px] my-2 md:my-10 hover:shadow-xl hover:shadow-blue-600"
          renderImage={() => (
            <img className="w-full" src={image} alt="image 1" />
          )}
        >
          <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="bg-[#F6E96B] w-fit p-1 rounded">${price}</p>
          </div>
          <p className="text-sm">{recipe}</p>
          <div className=" items-center justify-center flex mt-4">
            <button
            onClick={handleAddTocard}
             className="bg-[#399918] text-white px-2 py-2 rounded hover:rounded-full">Order now</button>
          </div>
        </Card>
        </div> );
};

export default OrderCards;

