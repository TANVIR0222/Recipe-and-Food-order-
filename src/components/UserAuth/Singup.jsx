import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocilLogin from "../shared/SocilLogin";

const Singup = () => {
  const navigate = useNavigate();
  const { createUser, updateUseProfile } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  // react formik
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  console.log(watch("example")); // watch input value by passing the name of it

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUseProfile(data.name, data.photoURL).then(() => {
          // create user and send data database 
          const userInfo ={
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
          }
          axiosPublic.post('/users',userInfo)
          .then((res) => {
            console.log(res.data);
            if(res.data.insertedId){
              Swal.fire({
                position: "center",
                icon: "success",
                title: "user create successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
              navigate("/");
            }
          })
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="  max-w-lg justify-center p-6 mx-auto my-20 shadow-lg shadow-red-200">
        <h1 className="text-3xl font-bold text-center mb-5">SingUp</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-md flex-col gap-4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              {...register("name", { required: true })}
              placeholder="tanvir"
            />
            {errors.name?.type === "required" && (
              <p className=" text-red-700" role="alert">
                Name is required
              </p>
            )}{" "}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Photo URL" />
            </div>
            <TextInput
              type="text"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
            />
            {errors.photoURL?.type === "required" && (
              <p className=" text-red-700" role="alert">
                Photo URL is required
              </p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              {...register("email", { required: "Email Address is required" })}
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              // onChange={handleChange}
            />
            {errors.email && (
              <p className=" text-red-700" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              {...register(
                "password",
                { required: true, minLength: 6, maxLength: 30 },
                { pattern: /^[A-Za-z]+$/i }
              )}
              placeholder="password"
            />
            {errors.password?.type === "required" && (
              <p className=" text-red-700" role="alert">
                Password is required
              </p>
            )}{" "}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className=" uppercase" type="submit">
            Singin
          </Button>
        </form>
        {/* socile login */}
        <SocilLogin></SocilLogin>
        <div>
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span className=" text-blue-600 ">
              <Link to={"/singin"}>sing up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
