import React from 'react'
import Card from './Card'
import {useNavigate} from "react-router-dom"
const Book = () => {
    const navigate=useNavigate()
    const bookList = [{
        Name: "Wings of Fire",
        Author: "A P J Abdul Kalam",
        Published_Year: 1999
    },




    { Name: "Playing It My Way", Author: "Sachine Tendulkar", Published_Year: 2014 },
    { Name: "The Story of My Experiments with Truth", Author: "M. K. Gandhi", Published_Year: 1929 },
    { Name: "The Race of My Life", Author: "milkha Singh", Published_Year: 2013 },
    { Name: "Beyond the last blue mountain", Author: "R. M. Lala", Published_Year: 1992 },
    { Name: "Mind Without Fear", Author: "Rajat Gupta ", Published_Year: 2019 },
    { Name: "Straight from the Heart: An Autobiography", Author: "Kapil Dev", Published_Year: 1986 },
    { Name: "My Country My Life", Author: "L K Advani", Published_Year: 2009 },
    { Name: "An Autobiography", Author: "Jawaharlal Nehru", Published_Year: 1936 },
    { Name: "Spy Princess", Author: "Shrabani Roy", Published_Year: 2009 },
    ]
    return (
        <>
            <h1>Book List</h1>
            <div style={{ justifyContent: "space-around", display: "flex", flexWrap: "wrap", margin: "10px", }}>
                {bookList.slice(0, 3).map((ele,id) => {
                    return <Card  ele={ele} type="book" />
                })}

            </div>
            {bookList.length > 3 ? <button style={{ color: "red", }} 
            onClick={()=>
                navigate("/viewmore",{
                  state:{
                    data :bookList, type:"book", header:"List Of Biography"
                  }
            })}>View More</button> : ""}
        </>
    )
}

export default Book