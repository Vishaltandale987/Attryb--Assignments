import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Home() {
  const [new_car, setnew_car] = useState();
  const [second_hand_car, setsecond_hand_car] = useState();

  const getNewCar = async () => {
    try {
      const res = await axios("https://serverside-qga2.vercel.app/oem");
      setnew_car(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSecondHandCar = async () => {
    let all = "all";
    try {
      const res = await axios(
        `https://serverside-qga2.vercel.app/dealers/${all}/${all}/${all}`
      );
      setsecond_hand_car(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewCar();
    getSecondHandCar();
  }, []);

  console.log("new_car", new_car);

  console.log("second_hand_car", second_hand_car);
  return (
    <div id="main_div">


      <div className="card">
        {new_car?.slice(0, 3).map((el, index) => {
          return (
            <div>
              <img
                src={el.img}
                alt=""
                style={{
                  width: "15em",
                  height: "13em",
                }}
              />
              <p>
                
                <b> Model Name - {el.model_name} </b>
              </p>
            </div>
          );
        })}
        <NavLink to="/newCars">
                
        <Button style={{
          marginTop:"5em"
        }}>see more</Button>
              </NavLink>
      </div>

      <div className="card">
        {second_hand_car?.slice(0, 3).map((el, index) => {
          return (
            <div>
              <img
                src={el.img}
                alt=""
                style={{
                  width: "15em",
                  height: "13em",
                }}
              />
              <p>
                
                <b> Model Name - {el.model_name} </b>
              </p>
            </div>
          );
        })}
        <NavLink to="/secondHandCars">
                
        <Button style={{
          marginTop:"5em"
        }}>see more</Button>
              </NavLink>
      </div>

    </div>
  );
}

export default Home;
