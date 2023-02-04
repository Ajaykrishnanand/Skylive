import { useState } from "react";
import Login from "./Login";
const Navbar =()=>{
  const [visible,setVisible] = useState(false)
  function changebehave(){ 
   if(visible){
     setVisible(false)
   }else{
    setVisible(true)
   }
  
  }
    return (
        <>|
    <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
 
    <div className="w-full navbar  border-white border-b-2 fixed bg-base-300">
      <div className="flex-none">
     
        <label htmlFor="my-drawer-3" onClick={changebehave} className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"  ></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Skylive</div>
      <div className="form-control  flex-1 pr-[610px]">
      <input type="text" placeholder="Search" className="input input-bordered "  />
    </div>
      <div className="flex-none  lg:block">
        <ul className="menu menu-horizontal">
      
         
          <li><a><Login/> </a></li>
        </ul>
      </div>
    </div>


  </div>
{(visible==true)&&(<div className="drawer-side   pt-[90px] ">
  <label htmlFor="my-drawer-3" className=""></label> 
  <ul className="menu bg-base-300 fixed border-r-2 border-white h-full w-80 ">
    
    <li className="p-10"><a  className="ring-2 ring-white rounded-xl">profile</a></li>
    <li className="p-10"><a className="ring-2 ring-white rounded-xl">username</a></li>
    
  </ul>
  
</div>)}
</div>
  </>
    )

}
export default Navbar;