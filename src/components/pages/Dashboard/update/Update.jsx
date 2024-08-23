import { TextInput, Label, Select, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=e5c85096683e3ea5d78a598b6741529e`


const Update = () => {
    const {name,price,category,recipe,image,_id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
    
      } = useForm();

      const onSubmit = async (data) =>{
        // image bb using data send 
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile ,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuInfo = {
                name : data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe:data.recipe,
                image : res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/order/${_id}`, menuInfo) 
            if(menuRes.data.modifiedCount > 0){
                // reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is updated to the  menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    
        }
    
        // menu send data base 
      }


    return (
      <>
      <Helmet>
        <title>Update items</title>
      </Helmet>

        <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
        <h1 className=" text-4xl mx-auto"> Update item </h1>
        {/* <h1 className="text-3xl">Total Price : $</h1> */}
      </div>
      <div className="p-4 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <TextInput
              defaultValue={name}
                type="text"
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                required
              />
            </label>
          </div>
          {/* category */}

          <div className="flex gap-6">
            {/* category */}
            <Label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">category*</span>
              </div>
              <Select
                defaultValue="default"
                {...register("category", { required: true })}
                //   className="select select-bordered w-full"
                required
              >
                <option disabled value="default">
                  {category}
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </Select>
            </Label>
            {/* Price  */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <TextInput
              defaultValue={price}
                type="text"
                placeholder="Product Price"
                {...register("price", { required: true })}
                required
              />
            </label>
          </div>
          {/* text area */}
          <div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
              defaultValue={recipe}
                id="comment"
                {...register("recipe", { required: true} )}
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
            <img src={image} className="w-60 mt-3" alt="" />

            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input bottom-2 border-gray-400 my-6 file-input-bordered w-full max-w-xs"
              required
            />
          </div>
            <button className=" bg-[#337357] rounded text-white hover:rounded-full p-2 felx items-center gap-2"  >
            Add Items 
            <EmojiEmotionsIcon></EmojiEmotionsIcon>
          </button>
            
        </form>
      </div>
    </div>
    </>

    );
};

export default Update;