import Pagination from "@mui/material/Pagination";
import usePagination from "../../Hooks/usePagination";
const Paginatios = ({ orders }) => {
    const [
        totalPages,
        startPageIndex,
        endPageIndex,
        currentPageIndex, //eslint-disable-line
        displayPage,
      ] = usePagination(5, orders.length);
  return (
    <div>

      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={orders[i].id}>
              
            </div>
          );
        }
        return displayPosts;
      })()}

        <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />        
      
    </div>
  );
};

export default Paginatios;
