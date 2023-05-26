import React, { useEffect } from "react";
import "./CarSubmitform.css";
import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";

function SecondHandCarInventry({ data }) {
  const add = () => {
    localStorage.setItem("Second_hand_car_id", data._id);
  };

  let id = localStorage.getItem("id");



  const handle_delete_car = async () => {

    try {

        if( id === "646f274d5e49494745f215e4"){

            const res = await axios.delete(`http://localhost:8088/dealers/${data._id}`);
            alert(res.data)
            window.location.reload(false);
        }else{
            alert("Only dealers have access to delete")
        }
      } catch (error) {
        console.log(error);
      }
  }



  

  return (
    <div id="secondcarInventrys">
      <img src={data.img} alt="" />
      <p>{data.model_name}</p>
      <div>
        <NavLink to="/secondHandSinglePage">
          <Button onClick={add}>see more detail</Button>
        </NavLink>

        {id === "646f274d5e49494745f215e4" ? (
          <EditIcon
            style={{
              marginLeft: "20px",
            }}
          />
        ) : null}

        {id === "646f274d5e49494745f215e4" ? (
          <DeleteIcon
            style={{
              marginLeft: "20px",
            }}

            onClick={handle_delete_car}
          />
        ) : null}


      </div>
    </div>
  );
}

export default SecondHandCarInventry;
