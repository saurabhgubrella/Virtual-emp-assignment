import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
   const pagenumbers = [];
   for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
      pagenumbers.push(i);
   }
   return (
      <nav>
         <ul className="pagination">
            {pagenumbers.map((number) => (
               <li key={number} className="page-item">
                  <a
                     href="!#"
                     onClick={() => paginate(number)}
                     className="page-link"
                  >
                     {number}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Pagination;
