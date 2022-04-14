import axios from 'axios';
import React, { useEffect, useState } from'react';
import Postitem from './postitem';
function Postlist()
{
        const[postdata,setpostdata]=useState([])
        useEffect(()=>{
                axios.get("/api/post/getposts").then(res=>{
                        console.log(res.data)
                        setpostdata(res.data)

                }).catch(err=>{
                        console.log(err)
                })
        },[])
        const postlist = postdata.map(post=>{
  
                 

                return(
                        <div className='row justify-content-center' key={post}>
                 <Postitem post={post}/>
                        </div>
                )
        })
return(
    
        <div>
                <a href="/addpost" className='btn btn-primary m-5'>addpost</a>
              {postlist}
        </div>
    
)
}
export default Postlist