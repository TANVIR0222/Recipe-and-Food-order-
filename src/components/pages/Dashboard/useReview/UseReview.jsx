import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UseReview = () => {
  const [rating, setRating] = useState(0);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async(data) => {
    const reviewInfo ={
        email : data.email,
        comment: data.comment
    }
    console.log(data)
    const res = await axiosPublic.post('/comments',reviewInfo)
    if(res.data.insertedId){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        reset();
    }
  };
  return (
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center  rounded-b-xl bg-[#6EACDA] h-14 justify-between">
        <h1 className="text-2xl mx-auto font-bold text-white">Reviews</h1>
      </div>
      <div className="card rounded">
        <div className="w-1/2 justify-center p-6 mx-auto my-20 shadow-lg shadow-blue-700">
          <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                {...register("email")}
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                {...register("comment")}
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseReview;
