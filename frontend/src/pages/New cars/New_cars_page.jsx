import React, { useEffect, useState } from "react";

import axios from "axios";

import New_car_Inventry from "../../components/submit new car form/New_car_Inventry";
import "./car.css";
import OEMSearch from "../../components/search/oem/OEMSearch";
function New_cars_page() {
  const [cardata, setcardata] = useState();

  // get post

  const getPost = async () => {
    try {
      const res = await axios("https://serverside-qga2.vercel.app/oem");
      setcardata(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  const add = () => {
    localStorage.setItem("New_car_id", cardata._id);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>

      <p style={{
        color: "rgb(220, 20, 60)",
        fontFamily:"inherit",
        fontSize:"50px",
        marginBottom:"30px"
      }}> <b> OEM Section</b> </p>

<OEMSearch/>
    <div className="secondcarInventry">

      {cardata?.map((el, index) => {
        return <New_car_Inventry key={index} data={el} />;
      })}
    </div>
      </div>
  );
}

export default New_cars_page;
