import Postcard from "../card/Postcard";
import axios from "axios";
import { useEffect, useState } from "react";
const Home=()=>{
 
    return(
        <>
        
        <div className=" grid rows-1">
        <Postcard />

        </div>

        </>
    )
}
export default Home;