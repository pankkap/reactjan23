import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Post() {

    const [posts, setPosts] =  useState();
    const [post, setPost] =  useState();
    const [editForm, seteditForm] =  useState(false);
    const [createForm, setcreateForm] =  useState(false);
    const [newUpdatedpost, setnewUpdatedpost] =  useState({
      id:"",
      title:"",
      body:""
    });

    useEffect(()=>{
        axios
        .get('http://127.0.0.1:3003/posts')
        .then((res)=>setPosts(res.data))
        .catch((err)=>console.log(err))
           
    },[]);
    // console.log(posts) 

    function updateRecord(){
      // console.log(newUpdatedpost);
      axios
      .put(`http://127.0.0.1:3003/posts/${post.id}`, newUpdatedpost)
      .then((res)=>{alert("Record Updated")
        window.location.reload();
    })
      .then((err)=>console.log(err))

    }

    function deleteRecord(postinfo)
    {
       if(window.confirm("Are you sure to delete this record"))
       {
        axios
        .delete(`http://127.0.0.1:3003/posts/${postinfo.id}`)
        .then((res)=>{alert("Record Deleted")
        window.location.reload();
    })
      .then((err)=>console.log(err))
       }
    }

    function createRecord(postInfo)
    {
      axios
      .post(`http://127.0.0.1:3003/posts`, postInfo)
      .then((res)=>{alert("Record Created")
      window.location.reload();
      setcreateForm(false)
  })
    .then((err)=>console.log(err))
    }

    function editPostDetails(postInfo){
        console.log(postInfo)
        setPost(postInfo)
        seteditForm(true);
    }

    function createNewRecord(){
      setcreateForm(true)
    }
    
// Session-13 is on Creating New Record


  return (
    <div className='container'>
        <h2 className='text-center bg-primary text-white'>List of Posts</h2>
        <button className='btn btn-info' onClick={createNewRecord}>Add New Record</button>

        {/* Functionality for Creating New Record */}

        {
          createForm?
          (<div>
            <h3 className='text-center'>Create Record</h3>
          <form>
              <label htmlFor=""><b>ID</b></label>
              <input type="text" defaultValue={newUpdatedpost.id} className="form-control"
              onChange={(e)=>setnewUpdatedpost({...newUpdatedpost, id:e.target.value})}
              ></input>
              <label htmlFor=""><b>Title</b></label>
              <input type="text" defaultValue={newUpdatedpost.title} className="form-control"
              onChange={(e)=>setnewUpdatedpost({...newUpdatedpost, title:e.target.value})}
              ></input>
              <label htmlFor=""><b>Body</b></label>
              <input type="text" defaultValue={newUpdatedpost.body} className="form-control"
              onChange={(e)=>setnewUpdatedpost({...newUpdatedpost, body:e.target.value})}
              ></input>
              <button className='btn btn-primary mt-2' type='button' onClick={()=>createRecord(newUpdatedpost)}>Create</button>
          </form>
          </div>):null
        }


{
editForm?
(
 <div>
  <h3 className='text-center'>Update Record</h3>
<form>
    <label htmlFor=""><b>ID</b></label>
    <input type="text" defaultValue={post.id} className="form-control"
    onChange={(e)=>setnewUpdatedpost({...newUpdatedpost, id:e.target.value})}
    ></input>
    <label htmlFor=""><b>Title</b></label>
    <input type="text" defaultValue={post.title} className="form-control"
    onChange={(e)=>setnewUpdatedpost({...newUpdatedpost, title:e.target.value})}
    ></input>
    <label htmlFor=""><b>Body</b></label>
    <input type="text" defaultValue={post.body} className="form-control"
    onChange={(e)=>setnewUpdatedpost({...newUpdatedpost, body:e.target.value})}
    ></input>
    <button className='btn btn-primary mt-2' type='button' onClick={updateRecord}>Update</button>
</form>
</div>
):<table className="table">
<thead className="thead-light">
  <tr>
    <th scope="col">#</th>
    <th scope="col">Title</th>
    <th scope="col">Body</th>
    <th scope="col">Actions</th>
    
  </tr>
</thead>
<tbody>
  {
      posts ?
      posts.map((post,i)=>
          (
              <tr key={i}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td><button className='btn btn-success' onClick={()=>editPostDetails(post)}>Edit</button></td>
                  <td><button className='btn btn-danger' onClick={()=>deleteRecord(post)}>Delete</button></td>
                  
              </tr>
          )
      ):null
  }
</tbody>
</table>

}
    </div>
  )
}
