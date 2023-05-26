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
      if (id === "646f274d5e49494745f215e4") {
        const res = await axios.delete(
          `https://serverside-qga2.vercel.app/dealers/${data._id}`
        );
        alert(res.data);
        window.location.reload(false);
      } else {
        alert("Only dealers have access to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="secondcarInventrys">
      <img
        src={data.img}
        alt=""
        style={{
          width: "100%",
          margin: "auto",
          height: "30em",
          border: "1px solid gray",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginBottom: "20px",
          marginLeft: "30px",
          marginTop: "20px",
        }}
      >
        <p className="text">
         
          <b> Model Name - {data.model_name} </b>
        </p>
        <p className="text">
         
         <b> Model Price - {data.price} Lack</b>
       </p>
    


      </div>
      <div>
        <NavLink to="/secondHandSinglePage">
          <Button colorScheme="whatsapp" mb={10} onClick={add}>
            see more detail
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default SecondHandCarInventry;
