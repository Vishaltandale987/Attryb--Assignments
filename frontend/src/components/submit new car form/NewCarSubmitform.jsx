import React, { useEffect, useRef, useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import "./CarSubmitform.css";

let id = localStorage.getItem("id");

const initState = {
  model_name: "",
  year_model: "",
  price: "",
  colors: "",
  mileage: "",
  Power: "",
  max_speed: "",
  img: "",
};
function NewCarSubmitform() {
  const [image, setimage] = useState("");
  const [formData, setFormData] = useState(initState);

  console.log(formData);

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
            placeholder={"Color"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, colors: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Mileage"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, mileage: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Power"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, Power: e.target.value })
            }
            required
          />

          <Input
            placeholder={"Max Speed"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, max_speed: e.target.value })
            }
            required
          />

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

export default NewCarSubmitform;
