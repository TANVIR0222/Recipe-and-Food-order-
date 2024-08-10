import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form"

const Singup = () => {
  // react formik
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const { createUser } = useContext(AuthContext);
  const handleSingin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .error((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className=" max-w-lg justify-center p-6 mx-auto my-20 shadow-lg shadow-red-200">
        <h1 className="text-3xl font-bold text-center mb-5">SingUp</h1>
        <form onSubmit={handleSingin} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              // onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              // onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className=" uppercase" type="submit">
            Singin
          </Button>
        </form>

        <div>
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span className=" text-blue-600 ">
              <Link to={"/singin"}>sing up</Link>
            </span>{" "}
          </p>
        </div>
        {/* {error && <p className="text-red-500 text-center mt-5">{error}</p>} */}
      </div>
    </div>
  );
};

export default Singup;
