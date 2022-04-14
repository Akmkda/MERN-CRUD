import axios from 'axios';
import React, { useEffect } from'react';
import AOS from'aos'
import'aos/dist/aos.css'
import{Link, useHistory} from'react-router-dom'
import Aos from 'aos';
function Postitem({post})
{ 
        const history= useHistory()
        useEffect(()=>{
                Aos.init()
        },[])
        function deletepost(post)
        {
        axios.post("/api/post/deletepost",{postid:post}).then(res=>{
        alert(res.data)
        history.go(0)
        }).catch(err=>{
                console.log(err)
        })
}

return(
    
        <div className="col-md-8 shadow p-3 mb-5 bg-body rounded" data-aos="fade-up">
        <h1 className='p-1'>  {post.title}</h1>
        <img src={post.imageurl} className='img-fluid' alt=""/>
        <p className='p-1'>{post.description}</p>
        <Link to={`/editpost/${post.postid}`}><li className='btn btn-primary'>Edit</li></Link>
        
        <button className='btn btn-danger' onClick={()=>{deletepost(post.postid)}}>Delete</button>
        </div>
    
)
}
export default Postitem