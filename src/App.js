import React, {useState, useEffect} from 'react';
import './App.css';
import  { Posts } from './components/Posts';
import { Pages } from './components/Pages';
import axios from 'axios';


const App = () => {


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {

    const fetchPosts = async() =>{
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  //get current post

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='container mt-5'>
      <h1 className="text-primary"> my blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pages postsPerPage ={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
