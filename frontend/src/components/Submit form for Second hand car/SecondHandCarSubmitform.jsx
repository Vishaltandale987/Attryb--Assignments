import React, { useEffect, useRef, useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import "./CarSubmitform.css";
import moment from "moment/moment";

let id = localStorage.getItem("id");
let time = moment().format("MMMM Do YYYY, h:mm:ss a");

const initState = {
  dealer_Id: id,
  model_name: "",
  year_model: "",
  original_paint: "",
  img: "",
  km_run: "",
  major_scratches: "",
  number_of_accidents_reported: "",
  number_of_previous_buyers: "",
  registration_place: "",
  postTime: time,
  description: "",
  mileage: Number,
  price: Number,
};

function SecondHandCarSubmitform() {
  const [image, setimage] = useState("");
  const [formData, setFormData] = useState(initState);

  // console.log(formData);

  // cloudinaty && post

  const image_file_post_to_cloudinary_get_image_deploylink = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dd9cmhunr");

    fetch("https://api.cloudinary.com/v1_1/dd9cmhunr/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({ ...formData, img: data.url });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Post request FE to DealersModel

  const handle_post_submiting_from = async () => {
    try {
      let res = await axios.post(`https://serverside-qga2.vercel.app/dealers`, formData);

      alert("Car has been added.");
    } catch (err) {
      console.log(err);
    }
  };
  // let dealer_id = localStorage.getItem("id");

  if (formData.img !== "" && formData.dealer_Id !== "") {
    handle_post_submiting_from();
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <AddIcon mr={2} className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  // accept=".png,.jpeg,.jpg"
                  onChange={(e) => setimage(e.target.files[0])}
                />
              </label>
              {image && (
                <div className="shareImgContainer">
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    style={{
                      width: "50px",
                      borderRadius: "50px",
                    }}
                  />
                  <CloseIcon
                    className="shareCancelImg"
                    onClick={() => setimage("")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="shareHr" />

        <div className="input_form">
          <Input
            placeholder={"Model Name"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, model_name: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Year Model"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, year_model: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Original Paint"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, original_paint: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Price"}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Milage"}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, mileage: e.target.value })
            }
            required
          />

          <Input
            placeholder={"km run"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, km_run: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Major Scratches"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, major_scratches: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Major number of accidents reported"}
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                number_of_accidents_reported: e.target.value,
              })
            }
            required
          />

          <Input
            placeholder={"Number of previous buyers"}
            type="text"
            onChange={(e) =>
              setFormData({
                ...formData,
                number_of_previous_buyers: e.target.value,
              })
            }
            required
          />

          <Input
            placeholder={"Registration Place"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, registration_place: e.target.value })
            }
            required
          />
          <textarea
            id="w3review"
            name="w3review"
            rows="10"
            cols="50"
            placeholder="Enter description and use full stop ( . ) after every point"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>

          <button
            className="shareButton"
            onClick={image_file_post_to_cloudinary_get_image_deploylink}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondHandCarSubmitform;
