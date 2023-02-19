 import axios from "axios";
import { useContext, useEffect ,useState} from "react";
import { accContext } from "../context/ApplicationContext";
 import Getbtn from "./Subscriberpage.module.scss"
function Subscriberpage(){
  const ctx = useContext(accContext);
  const address= ctx.sharedState.acclogin.accountAddress;
   const [subscribe ,setSubscribe] = useState([])
   const getdata =async()=>{
    const data = {
      address: address,
      
    };
    const datais = await axios.post(
      "http://localhost:8081/Subscribe/adress",
      data
    );
    setSubscribe(datais.data)
    console.log(subscribe)
    console.log(datais.data)
   }
   useEffect(()=>{
    getdata()
   },[])
return(
    <>
   
   <div className ="mt-20">

 {subscribe.lenget>0&& subscribe.map((post)=>(<div className="card card-side bg-base-100 w-[30rem] h-[32] ml-[47rem]  shadow-lg shadow-[#9089FC]">
  <figure>
  <div class="avatar">
  <div class="w-24 mask mask-squircle ">
    <img src="https://static.wikia.nocookie.net/onepiece/images/5/56/Tama_Eating_Oshiruko.png/revision/latest?cb=20210301010505" />
  </div>
</div>
  </figure>
  <div className="card-body flex justify-evenly">
    <h2 className="card-title">channelname</h2>
    <p>description </p>
    <button className={Getbtn.btn}>subscribe</button>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>  
 </div>))}
 </div>
        
    </>
)
}

export default Subscriberpage;

  
  
