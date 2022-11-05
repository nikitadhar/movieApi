import React, { useState } from 'react'
import axios from "axios";

export default function UI() {
    const [post,setPost] =useState("")
    function submit(){
      axios.get("https://fake-movie-database-api.herokuapp.com/api?s=batman").then((res)=>{
        setPost(res.data.Search)
        console.log(res.data.Search)
      })}
  return (
    <div> 
<button type="button" onClick={submit} className="btn btn-primary">Movie</button>
{post.map((value,index)=>{
return(
            <p>{value.Poster}</p>
        )
    })
   }
   
   
    </div>
     
 
  )
}
