 const PostCard=()=>{
return(
    <>
        <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4">
        {posts &&
          posts.map((post) => (
            <div className=" p-8 	">
              <div className="card card-compact w-96 h-96 ring-2 ring-current glass ">
                <figure>
                  <a href={post.imageUrl}>
                    <img h src={post.imageUrl} onClick={post.imageUrl} />
                  </a>
                </figure>
                <div className="card-body">
                  <Link to={"/buy/" + post._id}>
                    <h2 className="card-title">{post.name}</h2>
                    {/* <h2>DESCRIPTION!</h2> */}
                    <div class="badge badge-secondary">
                      {c ? "avilable" : "not-avaliable"}
                    </div>
                    <p>About this Item : {post.description}</p>
                    <div className="card-actions justify-end">
                      {/* <button className="btn ">Rent Now</button> */}
                      <div className="font-mono text-xl">
                        rent-price/month:{" "}
                      </div>
                      <div> {post.rental}</div>
                      <div className="font-mono text-xl">buy-price: </div>
                      <button className="btn  ">Buy Now</button>
                      <div> {post.buying}</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
)
 }
 export default PostCard