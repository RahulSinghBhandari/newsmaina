import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FetchData = ({ cat }) => {
    const [Data, setData] = useState("")
    const fetchData = async () => {
       await axios
       .get(
        cat 
        ? 'https://newsapi.org/v2/top-headlines?country=in&cat=${cat}&apiKey=a4c559166b4948a18b914cde7cb7024c'
        : "https://newsapi.org/v2/top-headlines?country=in&apiKey=a4c559166b4948a18b914cde7cb7024c"
        )
       .then((res) => setData(res.data.articles)) 
    }
    useEffect(() => {fetchData(cat)}, [cat])
    
  return (
    <div className='container my-3 p-3' style={{minHeight: "100vh"}}><h3><u>Top Headlines</u></h3>
        <div className='container d-flex justify-content-center align-items-center flex-column my-3'>
            {Data ? Data.map((items,index) => 
            <>
                <div className='container my-4' style={{width:"600px", boxShadow: "2px 2px 10px grey"}}>
                    <h5 className='my-2'>{items.title}</h5>
                        <div className='container '>
                            <img src={items.urlToImage} alt='Image Not Found' className='img-fluid d-flex justify-content-center align-items-center' style={{width:"100%",height:"300px", objectFit:"Cover"}} />
                        </div>
                    
                    <p className='my-1'>{items.description}</p>
                    <Link className='my-1' to={items.url} target="blank">View More</Link>
                </div>
                
            </>) : "LOADING....."}
        </div>
    </div>
  )
}

export default FetchData 