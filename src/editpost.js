import axios from 'axios';
import React, { useEffect ,useState} from'react';
import{useHistory, useParams}from'react-router-dom'
function Editpost({postdata})
{      
        const params =useParams()
        const[title,settitle]=useState('')
        const[imageurl,setimageurl]=useState('')
        const[description,setdescription]=useState('')
        const history =useHistory()
        useEffect(()=>{
                axios.post("/api/post/getpostdata",{postid:params.postid}).then(res=>{
                        console.log(res.data[0])
                        const postdata = res.data[0]
                        settitle(postdata.title)
                        setimageurl(postdata.imageurl)
                        setdescription(postdata.description)
               
                }).catch(err=>{
                        console.log(err)
                })
        },[])
        
        function editpost(post)
        {   
                  const updatedpost={
                        title :title,
                        imageurl :imageurl,
                        description :description,
                        postid:params.postid
                }
                axios.post("/api/post/updatedpost",updatedpost).then(res=>{
                        console.log(res.data)
                        alert(res.data)
                        history.push('/')
                }).catch(err=>{
                        console.log(err)

        })
}

return(
    
        <div className='row justify-content-center'>
          <div className='col-md-6'>
       <h1 className='m-3'>Edit the post</h1>
                  
       <div>
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
              <button onClick={editpost} className='btn btn-success float-left'> Edit post</button>
              
         </div>
                 
        </div>      
        </div>
)   
}


export default Editpost