"use client";
import React, { useEffect , useState } from 'react'

const Users = () => {
const [users, setUsers] = useState([]);

const readUsersData=()=>{
    fetch('http://localhost:5000/user/getall')
    .then((res) => {
        console.log(res.status);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        setUsers(data);
    
    }) 
    .catch((err) => {
        console.log(err)        
    });
};
useEffect(() => {
  readUsersData();

  
}, [])


  return (
    <div>
        <div className='col-md-4 mx-auto py-5'>
            <h2 className='text-center'> Users</h2>
        <hr/>
        {
            users.map((user)=>{
                return(
                    <div key={user._id} className='card mb-4'>
                        <div className='card-body'>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Users