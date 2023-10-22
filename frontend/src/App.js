import React from 'react';
import './App.css';
import Postform from './createPost';
import Post from './post';
import {useState, useEffect} from 'react';
import axios from 'axios';
const App = () =>{
  let [posts,setPosts] = useState({});
  useEffect(() =>{
    async function fetchData(){
    let allposts =  await axios.get('http://localhost:4000/posts');
    allposts = allposts?.data;
    for(let key of Object.keys(allposts)){
      let comments = await axios.get(`http://localhost:4001/posts/${key}/comments`);
      allposts[key].comments = comments; 
    }
    console.log(allposts);
    setPosts(allposts);
    }
    fetchData();
  },[]);
  return <div className = "home">
    <h1 className='heading'>Tweet App</h1>
    <Postform />
    {
      Object.keys(posts).map(post =>{
        return <Post post={posts[post]}/>
      })
    }
    </div>
}

export default App;