// import React from 'react'

// const Card = (props) => {
//    console.log(props)
//   return (
//     <>
//             <div style={{border:"1px solid black", margin:"10px", width:"30%"}}>
//               <h4>Name : {props.ele.Name}</h4>
//               <p> Author : {props.ele.Actor}</p>
//               <h6>Published Year : {props.ele.Published_Year}</h6>
//           </div>
    
//     </>
//   )
// }

// export default Card


























import React from 'react'

const Card = (props) => {
    console.log(props,"aww")
    const keys=Object.keys(props.ele)
  return (
    <>
          {props.type=="book"?<div style={{border:"1px solid black", margin:"10px", width:"30%"}}>
              <h4>{keys[0]} : {props.ele.Name}</h4>
              <p> {keys[1]} : {props.ele.Author}</p>
              <h6>{keys[2]} : {props.ele.Published_Year}</h6>
          </div>:<div style={{border:"1px solid black", margin:"10px", width:"30%"}}>
              <h4>{keys[0]} : {props.ele.Name}</h4>
              <p> {keys[1]} : {props.ele.Actor}</p>
              <h6>{keys[2]} : {props.ele.Release_Year}</h6>
              <h6>{keys[3]} : {props.ele.IMDB_Rating}</h6>
          </div>}
    
    </>
  )
}

export default Card
