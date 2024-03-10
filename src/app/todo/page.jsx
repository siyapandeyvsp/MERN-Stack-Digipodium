"use client";
import React from "react";
import { useState } from "react";
const Todo = () => {
  const [TaskArray, setTaskArray] = useState([
    
  ]); //first value to read and display second value to update /set the variable

  const addNewTask = (e) => {
    if (e.code === "Enter") {
      console.log(e.target.value);
      const obj={text:e.target.value,completed:false}
      setTaskArray([obj,...TaskArray])//used to extract the elements of an array
      e.target.value = "";
    }
  };
  return (
    <div className="v-100 bg-primary-subtle">
      <div className="container py-3">
        <h1 className="display-2 text-center my-3">Todo List</h1>
        <div className="card shadow-lg">
          <div className="card-header">
            <input
              className="form-control border-3 border-primary"
              onKeyDown={addNewTask}
            />
          </div>
          <div className="card-body">
            {TaskArray.map((task, index) => {
              return <div key={index} className="d-flex  p-3 align-items-center justify-content-between">
               <p className="m-0 h-5">{task.text}</p> 
               <button className="btn btn-danger">Delete</button>
                </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
