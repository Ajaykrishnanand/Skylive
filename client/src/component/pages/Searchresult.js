import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Postcard = (props) => {
  const [allvideos, SetAllvideos] = useState([]);
  const [posts, setPost] = useState([]);
  const getPosts = async () => {
    console.log("hello form the home ...");
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      const videoList = await axios.post(
        "https://skylive.onrender.com/search",
        data
      );
      const list = videoList.data;
      SetAllvideos(list);
      // console.log(allvideos);

      const datais = data.products;
      setPost(datais);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(allvideos);
  }, [allvideos]);
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="grid col-span-2 2xl:pl-40  pl-20 pt-20 grid-cols-3 2xl:grid-cols-5 place-content-center  divide-y  gap-4">
        {allvideos &&
          allvideos.length > 0 &&
          allvideos.map((post) => (
            <Link to={"/player/" + post.playerid + "/" + post.address}>
              <div className=" p-8 	">
                <div className="card card-compact w-60 h-60 shadow-2xl  ">
                  <figure className="h-full">
                    <a href={post.thumbnail}>
                      <img src={post.thumbnail} onClick={post.thumbnail} />
                    </a>
                  </figure>
                  <div className="card-body h-24 ">
                    <div className="flex justify-between">
                      <Link to="/player">
                        <div className="avatar">
                          <div className="w-12 rounded-full">
                            <img src={post.thumbnail} />
                          </div>
                        </div>
                      </Link>

                      <div>
                        <p className="card-title text-lg ">{post.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
export default Postcard;
