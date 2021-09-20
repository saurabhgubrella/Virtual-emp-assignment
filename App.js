import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Post from "./components/Post";

function App() {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(10);

   useEffect(() => {
      const fetchPost = async () => {
         setLoading(true);
         const res = await fetch(" https://restcountries.eu/rest/v2/all");
         setPosts(await res.json());
         setLoading(false);
      };
      fetchPost();
   }, []);
   //get current post
   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;
   const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
   //change page
   const paginate = (pagenumbers) => setCurrentPage(pagenumbers);

   return (
      <div className="App">
         <h1 className="text-primary mb-3">My Data</h1>

         <Post posts={currentPost} loading={loading} />
         <Pagination
            postPerPage={postPerPage}
            totalPost={posts.length}
            paginate={paginate}
         />
      </div>
   );
}

export default App;
