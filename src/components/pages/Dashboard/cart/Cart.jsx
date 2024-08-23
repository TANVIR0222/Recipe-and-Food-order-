import { Button } from "@mui/material";
import useCarts from "../../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const [cart,refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if(res.data.deletedCount){
                // 
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }

          })
        }
      });
      
  }

  return (
    <><Helmet>
    <title>Cart</title>
  </Helmet>
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      
      <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
        <h1 className="text-3xl">Total Item  :  {cart.length}</h1>
        <h1 className="text-3xl">Total Price : ${totalPrice}</h1>
        { cart.length ? <Link to={'/dashboard/payment'} ><Button variant="contained">Pay</Button></Link>
        :<Button disabled variant="contained">Pay</Button>
        }
      </div>
      <div className=" my-10 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <Button
                  onClick={()=> handleDelete(item._id)}
                    sx={{ bgcolor: "red" }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    </>
  );
};

export default Cart;
