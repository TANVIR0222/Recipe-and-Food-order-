import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCarts from "../../../../Hooks/useCarts";
import useAuth from "../../../../Hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret,setClientSecret ] = useState('')
  const [transactiosid, setTransactiosid] = useState('');
  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();
  const [cart] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    axiosSecure.post('/create-payment-intent',{price: totalPrice})
    .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
    })
  }, [axiosSecure,totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

    //   confirm payment
    const {paymentIntent , error:confirmErrot} = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || 'tanvir',
                email:user?.email || 'tanvir'
            }
        }
    })
    if (confirmErrot) {
        setError('confirm eror ')
    }else{
        console.log('payment Intent', paymentIntent);
        if(paymentIntent.status === "succeeded"){
            console.log('tran id ' , paymentIntent.id);
            setTransactiosid(paymentIntent.id);

            // now save data database 
            const payment = {
                email:user.email,
                price:totalPrice,
                date : new Date(),
                cartId : cart.map(item => item._id),
                menuItemid:cart.map(item => item.menuId),
                transactiosid:paymentIntent.id,
            }

            const res =await axiosSecure.post('/payments',payment)
            console.log('save data database',res.data);

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
        <Button className="mt-5"  type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </Button>
        <p className="text-red-600">{error}</p>
        {transactiosid && <p className="text-green-500">Transactios is Success id: {transactiosid}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
