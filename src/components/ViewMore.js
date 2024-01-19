import React from 'react'
import Card from './Card'
import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
const ViewMore = () => {
  const navigate=useNavigate()
  const location = useLocation();
  // console.log(location,"asz")
  return (
    <>
    <div style={{ display: "flex",marginLeft:"60px"}}> 
       <h1><IoIosArrowRoundBack onClick={()=>{
        navigate(-1)
       }} style={{borderRadius:"50%",border:"1px solid black", marginRight:"40px"}}/></h1>
       <h2>{location.state.header}</h2>
    </div>
   
    <div style={{ justifyContent: "space-around", display: "flex", flexWrap: "wrap", margin: "10px", }}>
      {location.state.data.map((ele) => {
        return <Card ele={ele} type={location.state.type}/>
      })}

    </div>
    </>
  )
}

export default ViewMore