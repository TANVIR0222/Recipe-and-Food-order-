import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

//   ---------------- make admin ---------------------

  const handleMakeAdmin = (user) =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${users.name} is an  Admin Now!`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
  }

  return (
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
        <h1 className="text-3xl mx-auto text-white font-semibold ">Total User : {users.length}  </h1>
        {/* <h1 className="text-3xl">Total Price : $</h1> */}
        <Button variant="contained">Pay</Button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email </th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                      user.role === 'admin' ? 'Admin' : <Button
                        onClick={() => handleMakeAdmin(user)}
                        sx={{ bgcolor: "" }}
                      >
                        <PeopleOutlineIcon color="white" sx={{ fontSize: 30 }} />
                      </Button>
                    }
                  </td>
                  <td>
                    <Button
                      onClick={() => handleDelete(user)}
                      sx={{ bgcolor: "red" }}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allusers;
