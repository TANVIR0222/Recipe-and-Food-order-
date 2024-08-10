import { useEffect, useState } from "react";

const useOrder = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/order')
        .then(response => response.json())
        .then(data => {
            setOrders(data);
            setLoading(false);
        })
    }, []);

    return[orders,loading]
};

export default useOrder;