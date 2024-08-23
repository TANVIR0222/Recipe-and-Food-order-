import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe("pk_test_51PnbBXRvHgxb6UJ2tYknhkfCvHla3t1mpacekdmXtR4V9JVuRfXoFe1vthzKnlTin1Tuw7K7WoiCnHtXsuO8V3wf00JCE6sj8t");

const Payment = () => {
  return (
    <>
    <Helmet>
      <title>Payment</title>
    </Helmet>
    <div className="mt-10 border-2 border-gray-300 min-h-screen">
      <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
        <h1 className="text-3xl">Total Item : </h1>
        <h1 className="text-3xl">Total Price : </h1>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
    </>
  );
};

export default Payment;
