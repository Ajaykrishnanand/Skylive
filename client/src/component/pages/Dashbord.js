const Dashbord = () => {
  return (
    <>  
      <div className="   ">
        {/* border-b-2   className=" pt-20  pl-40*/}
       <img src="https://i.dummyjson.com/data/products/1/3.jpg" className="w-full h-40"></img>
        <div className=" flex pl-20   ">
          <div >
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.dummyjson.com/data/products/2/3.jpg" />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-lgn   pl-10 font-bold">channel name</p>

            <p className="text-lg  pl-10 font-bold">@username</p>
          </div>
         
        </div>

        <div className=" flex justify-evenly text-2xl ">
          <h3 className=" btn bg-cyan-50 text-black  outline-0">videos</h3>
          <div className="pl-10">

          <h3 className=" btn  bg-cyan-50 text-black  outline-0">about</h3>
          </div>
        </div>
        <hr className=" flex  pt-20 " />
       
      </div>
         <div className="border-r-2 pl-[80rem]"></div>
    </>
  );
};
export default Dashbord;
