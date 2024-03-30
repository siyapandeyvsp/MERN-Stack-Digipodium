"use client";
import React, { useEffect , useState} from "react";
import toast from "react-hot-toast";

const Feed = () => {
  const [postList, setpostList] = useState([]);

  const readPostData = () => {
    fetch("http://localhost:5000/post/getall")
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setpostList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    readPostData();
  }, []);

  const deletePost=(id)=>{
    fetch('http://localhost:5000/post/delete/'+id,{
        method:'DELETE'
  })
  .then((res) => {
    if (res.status===200){
        toast.success('Post deleted successfully');
      readPostData();
    }else{
        toast.error('Failed to delete post');
    }
    
  }).catch((err) => {
    console.log(err);
    toast.error('Failed to delete post');
  });
  }

  return (
    <div>
      <div className="col-md-4 mx-auto py-5">
        <h2 className="text-center">Post Feed</h2>
        <hr />

        {postList.map((post) => {
          return <div key={post._id} className="card mb-4">
            <div className="card-header">
                <h5>Posted By: {post.username}</h5>
                <button className=" btn btn-danger" onClick={ ()=>{deletePost(post._id)}}>Delete</button>
            </div>
            <img className="card-img-fluid" src={post.image} alt=""/>
            <div className="card-body">
                <h5>{post.title}</h5>
                <h5>Posted on : {new Date(post.postedOn).toLocaleDateString()}</h5>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Feed;
