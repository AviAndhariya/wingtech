// this is about page for react router dom purpose & Fetch data & display with responsive UI

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Home.css";
import { Greeting } from "./Greeting";
import CounterApp from "./Class";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
    const [formData,setFormData] = useState([]);

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([name,age])
    console.log("name :", name);
    console.log("age ", age);
  };

  const handleAge=(e)=>{
    setAge(e.target.value);
  }
  const handleName=(e)=>{
    setName(e.target.value);
  }


  useEffect(() => {
    getData();
  }, [formData]);

  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/About"}>
        <button>About</button>
      </Link>
      <Link to={"/Parent"}>
        <button>Parent</button>
      </Link>

      <h3>This is HomePage</h3>


      
      
      {/* Form name and age */}
      <h3>Form</h3>
      <form action="" type="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={handleName}  value={name} placeholder="enter your name" />
        <br />
        <label htmlFor="age">age</label>
        <input type="number" onChange={handleAge} value={age} placeholder="enter your age" />
        <br />
        <button type="submit">Submit </button>
      </form>
      {/*Greeting component from props  */}

      <Greeting formData = {formData} />


      {/* data fetch and show with responsiveness */}
     
      <div className="container">
        {data.map((e, i) => {
          return (
            <div key={i}>
              <h4>{e.id}</h4>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          );
        })}
      </div>
    
    </div>
  );
};
