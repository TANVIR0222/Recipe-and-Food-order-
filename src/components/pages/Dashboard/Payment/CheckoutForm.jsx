import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCarts from "../../../../Hooks/useCarts";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// https://dashboard.stripe.com/test/payments

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactiosid, setTransactiosid] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    }

    //   confirm payment
    const { paymentIntent, error: confirmErrot } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "tanvir",
            email: user?.email || "tanvir",
          },
        },
      });
    if (confirmErrot) {
      setError("confirm eror ");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactiosid(paymentIntent.id);
        // now save data database
        const payment = {
          email: user.email,
          price: totalPrice,
          date: new Date(),
          cartId: cart.map((item) => item._id),
          menuItemid: cart.map((item) => item.menuId),
          transactiosid: paymentIntent.id,
          is:'panding'
        };

        const res = await axiosSecure.post("/payments", payment);
        refetch();

        if (res.data?.paymentResult?.insertedId) {
          //
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You SIR",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <div className="mt-20 mx-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button
          className="mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </Button>
        <p className="text-red-600">{error}</p>
        {transactiosid && (
          <p className="text-green-500">
            Transactios is Success id: {transactiosid}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
