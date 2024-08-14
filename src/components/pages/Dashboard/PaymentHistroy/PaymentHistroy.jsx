import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentHistroy = () => {
    const {user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/payments/${user?.email}`);
            console.log(response.data);
            return response.data;
        }
    })
  return (
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
        <h1 className="text-3xl mx-auto">Payment Histroy</h1>
        <h1 className="text-3xl mx-auto">Payment length : {payments.length} </h1>
      </div>
      <div className=" my-10 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>price</th>
              <th>Transactios</th>
              <th>Date</th>
              
            </tr>
          </thead>
          <tbody>
            {payments.map((payments, index) => (
              <tr key={payments._id}>
                <th>{index + 1}</th>
                <td>${payments.price}</td>
                <td>{payments.transactiosid}</td>
                <td>{payments.date}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistroy;
