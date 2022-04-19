import React,{useState}from'react'
import uniqid from'uniqid'
import axios from'axios'
import Swal from'sweetalert2'
function Addpost()
{
        const[title,settitle]=useState('')
        const[imageurl,setimageurl]=useState('')
        const[description,setdescription]=useState('')
        

       function addpost()
        {
          
                var post = {
                        title :title,
                        imageurl :imageurl,
                        description :description,
                        postid:uniqid()
                
                }
                
                 
        
                 axios.post("/api/post/addnewpost",post).then(res =>{
                     Swal.fire('congrats','your post added successfully','success')
                 }).catch(err=>{
                        console.log(err)
                     })
                      
        }



return(
    
        <div className='row justify-content-center'>
        <div className='col-md-6'>
                <h1 className='m-3'>Add new post</h1>
       
                  
        <div>
                <a href='/' className='btn btn-primary'>see posts</a>
                <br>
                </br>
               <input type="text" placeholder='title' className='form-control'
               value={title} onChange={(e)=>{settitle(e.target.value)}}/>
               <br>
               </br>
               <input type="text" placeholder='imageurl' className='form-control'  
               value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}}/>
               <br>
               </br>
               <textarea  cols="30" rows="10" placeholder='description' className='form-control'
                 value={description} onChange={(e)=>{setdescription(e.target.value)}}/> 
                 <br>
                 </br>          
               <button onClick={addpost} className='btn btn-success float-left'>Addpost</button>
               
          </div>
                  
         </div>      
       
        </div>
    
)
}
export default Addpost