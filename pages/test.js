import { async } from "@firebase/util";
import axios from "axios";
import React from "react";

export default function TestPage() {
  async function uploadImage(e) {
    const formData = new FormData(e.target);
    const file = formData.get("file");
    console.log("Upload function");
    if (!file) {
      console.log("Upload function - Nofile");
      return null;
    }
    const fileType = encodeURIComponent(file.type);
    console.log("Upload function - fileType", fileType);
    const { data } = await axios.get(`/api/upload_image?fileType=${fileType}`);
    const { uploadUrl, key } = data;
    const uploadedData = await axios.put(uploadUrl, file);
    // console.log("uploadedData", uploadedData);
    return uploadedData;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log("value", value);
    console.log("name", name);
    console.log("Reached handlesubmit, before await");
    const uploadedData = await uploadImage(e);
    console.log("Reached handlesubmit - after await", uploadedData);
    console.log(uploadedData);
  }

  const handleOnchange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    // console.log(name);

    if (name == "image") {
    }
  };
  return (
    <div className="section">
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="form-image"
          name="file"
          // value={agent.image}
          // onChange={handleChange}
          accept="image/*"
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          name="image"
          onChange={handleOnchange}
        />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
