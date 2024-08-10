import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Singin = () => {
  const { singin } = useContext(AuthContext);
  const handleSingin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="card rounded">
      <div>
        <div className=" max-w-lg justify-center p-6 mx-auto my-20 shadow-lg shadow-red-200">
          <h1 className="text-3xl font-bold text-center mb-5">Sing In</h1>
          <form
            onSubmit={handleSingin}
            className="flex max-w-md flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <Button className=" uppercase" type="submit">
              Singin
            </Button>
          </form>

          <div>
            <p className="text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <span className=" text-blue-600 ">
                <Link to={"/singup"}>sing up</Link>
              </span>{" "}
            </p>
          </div>
          {/* {error && <p className="text-red-500 text-center mt-5">{error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Singin;
