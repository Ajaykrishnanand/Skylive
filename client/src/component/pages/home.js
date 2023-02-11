import Postcard from "../card/Postcard";
import axios from "axios";
import { useEffect, useState } from "react";
const Home=()=>{
  // const[posts,setPost]= useState([]);
  // const getPosts=async()=>{
  //   console.log("hello form the home ..")
  //   try{
  //     const{data} = await axios.get("https://dummyjson.com/products")
  //     setPost(data);
  //     console.log(posts.products)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  // useEffect(()=>{
  //   getPosts()
  // },[]) 
    return(
        <>
        
        <div className=" grid rows-1">
        <Postcard />

        </div>

        </>
    )
}
export default Home;