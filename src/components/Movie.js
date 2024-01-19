import React from 'react'
import Card from './Card'
import {useNavigate} from "react-router-dom"
const Movie = () => {
  const navigate=useNavigate()
  const movieList = [
    {
      Name: "Hum Dil De Chuke Sanam",
      Actor: "Salman Khan/Ajay Devgan",
      Release_Year: 2000, 
      IMDB_Rating: 7.8
    },



    { Name: "Hum AApke Hai Koun", Actor: "Salman Khan/Saif Ali Khan", Release_Year: 1998, IMDB_Rating: 6.7 },
    { Name: "Dil Ka Rista", Actor: "Arjun Rampal", Release_Year: 2004, IMDB_Rating: 6.4 },
    { Name: "Dil Chahta Hai", Actor: "Amir Khan/Akshay Khanna/Saif Ali Khan", Release_Year: 2003, IMDB_Rating: 7.5 },
    { Name: "Mela", Actor: "Amir Khan", Release_Year: 1998, IMDB_Rating: 8.2 },
    { Name: "Phir Hera Pheri", Actor: "Akshay Kumar/Paresh Rawal/Sunil Shetty", Release_Year: 2002, IMDB_Rating: 8.8 },
    { Name: "Border", Actor: "Akshay Khanna/Sunny Deol", Release_Year: 1997, IMDB_Rating: 9.3 },
    { Name: "Maa Tujhe Salam", Actor: "Sunny Deol", Release_Year: 2006, IMDB_Rating: 8.8 },
    { Name: "Mujhse Shaadi Karoge", Actor: "Salman Khan/Akshay Kumar", Release_Year: 2005, IMDB_Rating: 7.0 },
    { Name: "Chup Chup K", Actor: "Shahid Kapor", Release_Year: 2008, IMDB_Rating: 5.8 },
  ]
  return (
    <>
      <h1>Movie List</h1>
      <div style={{ justifyContent: "space-around", display: "flex", flexWrap: "wrap", margin: "10px", }}>
        {movieList.slice(0, 3).map((ele,id) => {
          return <Card ele={ele} type="movie"/>
        })}

      </div>
      {movieList.length > 3 ? <button style={{ color: "red", }} 
      onClick={()=>navigate("/viewmore",{
         state:{
          data:movieList, type:"movie", header:"Bollywood Movies List"
         }
      })}>View More</button> : ""}
    </>
  )
}

export default Movie