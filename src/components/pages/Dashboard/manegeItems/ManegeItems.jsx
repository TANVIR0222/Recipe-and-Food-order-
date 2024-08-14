import { Button } from "@mui/material";
import useOrder from "../../../../Hooks/useOrder";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const ManegeItems = () => {
  const [order, , refetch] = useOrder();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You wont be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/order/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className=" mx-auto rounded-b-xl bg-[#6EACDA] p-2 ">
        <h1 className="text-3xl mx-auto">Total Item : {order.length} </h1>
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
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
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
                  <Link to={`/dashboard/update/${item._id}`}>
                    <Button
                    //   onClick={() => handleDelete(item._id)}
                      variant="contained"
                    >
                      <EditNoteIcon></EditNoteIcon>
                    </Button>
                  </Link>
                </th>
                <th>
                  <Button
                    onClick={() => handleDelete(item._id)}
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
  );
};

export default ManegeItems;
