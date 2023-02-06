import { useState, useEffect } from "react";
import axios from "axios"
const PostCard = () => {
   console.log("this is from postcard")
  const [posts, setPosts] = useState([]);
  const makeRequest = async () => {
    try{
      const { data } = await axios.post("https://dummyjson.com/products/");
      setPosts(data);
      console.log(posts);
     
    }catch(e){

      console.log(e)
    }
   
    
   
  };


 
  return (
    <>
    <div className=" pl-60 pt-80 ">

    <div className="btn" onClick={makeRequest}>
      hello form dashbord
    </div>
    </div>
      <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4">
        {posts && posts.products && (posts.products).map((post) => (
            <div className=" p-8 	">
              <div className="card card-compact w-96 h-96 ring-2 ring-current glass ">
                <figure>
                  <a href={post.products.images[0]}>
                    <img h src={post.products.images[0]} onClick={post.products.images[0]} />
                  </a>
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-end">
                    <div className="flex justify-between">
                      <img src={post.products.image[1]}></img>

                      <div>

                      <div className="font-mono text-xl">{post.products.title}</div>

                      <div className="font-mono text-xl">{post.products.category}</div>
                      <button className="btn  "></button>
                    </div>
                   
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default PostCard;
