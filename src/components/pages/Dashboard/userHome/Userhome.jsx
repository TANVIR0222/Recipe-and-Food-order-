import useAuth from "../../../../Hooks/useAuth";

const Userhome = () => {
    const {user} = useAuth();
    return (
        <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center  rounded-b-xl bg-[#6EACDA] h-14 justify-between">        
      </div>
            <h1 className="text-3xl mt-5 flex items-center justify-center">
                <span className="mr-4">Hi, Wellcome   </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
             </h1>
        </div>
    );
};

export default Userhome;