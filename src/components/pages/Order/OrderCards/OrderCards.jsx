import { Card } from "flowbite-react";

const OrderCards = ({items}) => {
    const {image,category,name ,recipe} = items
    return (
        <div>
            <Card
          className="mx-2 my-2 md:my-10 hover:shadow-xl hover:shadow-blue-600"
          renderImage={() => (
            <img width={500} height={500} src={image} alt="image 1" />
          )}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="text-sm">{recipe}</p>
          <div className="flex items-center justify-between">
            <h4 className="bg-yellow-100 w-fit p-2 rounded-md">
            {category}
            </h4>
            <button className="bg-[#399918] text-white px-2 py-2 rounded hover:rounded-full">Order now</button>
          </div>
        </Card>
        </div> );
};

export default OrderCards;

