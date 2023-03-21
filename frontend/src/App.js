import React, { useState, useEffect } from "react";
import axios from 'axios';

// // Components
// import Header from "./components/Header";
// import BlogForm from "./components/BlogForm";
// import Blogs from "./components/Blogs";


function App() {
  return (
    <>
    <Header/>
    <div className="container p-4">
     <BlogForm blogs={blogs} setBlogs={setBlogs}/>
     <Blogs blogs={blogs} setBlogs={setBlogs}/>
     
    </div>
    
    </>
  );
}


export default App;