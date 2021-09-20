import React from "react";

const Post = ({ posts, loading }) => {
   if (loading) {
      return <h2>Loading...</h2>;
   }

   return (
      <ul className="list-group mb-4">
         <table class="table">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Flag</th>
                  <th scope="col">Capital</th>
                  <th scope="col">Area</th>
                  <th scope="col">NativeName</th>
               </tr>
            </thead>
            <tbody>
               {posts.map((row, index) => (
                  <tr>
                     <th scope="row" key={index}>
                        {index}
                     </th>
                     <td>{row.name}</td>
                     <td>
                        <img src={row.flag} width="50px" height="50px" />
                     </td>
                     <td>{row.capital}</td>
                     <td>{row.area}</td>
                     <td>{row.nativeName}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </ul>
   );
};

export default Post;
