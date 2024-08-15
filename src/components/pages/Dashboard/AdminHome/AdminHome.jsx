import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center  rounded-b-xl bg-[#6EACDA] h-14 justify-between"></div>
      <h1 className="text-3xl mt-5 flex items-center justify-center">
        <span className="mr-4">Hi, Wellcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h1>
      <div className="stats shadow-lg flex items-center justify-center mt-8 shadow-blue-600">
  <div className="stat place-items-center">
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats.order}</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Revenue</div>
    <div className="stat-value text-secondary">${stats.revenue}</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.user}</div>
    <div className="stat-desc text-secondary">↗︎ 20 (2%)</div>
  </div>
</div>
    </div>
  );
};

export default AdminHome;
