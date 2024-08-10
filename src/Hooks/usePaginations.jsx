import { useState } from "react";

const usePaginations = () => {
    const [loading, setloading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    fetch('http://localhost:3000/totalCount')
    .then(response => response.json())
    .then(data => {
        setCurrentPage(data)
        setloading(false)
    })

    return[currentPage,loading]
};

export default usePaginations;