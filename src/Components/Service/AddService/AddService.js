import React, { useState } from "react";
import { OS_Header } from "../../Shared/OS_Header/OS_Header";
import { ServiceSidebar } from "../ServiceSidebar/ServiceSidebar";
import '../Service.css';

export const AddService = () => {

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("desc", info.desc);

    fetch('http://localhost:3001/addService', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('Service added successfully');
            }
        })
        .catch(error => {
            console.error(error)
        });

  };
  
  return (
    <section className="container">
      <OS_Header propsType="Add Service" />
      <div className="row">
        <div className="col-md-2">
          <ServiceSidebar />
        </div>
        <div style={{ backgroundColor: "#F4F7FC" }} className="col-md-10   p-4">
          <div
            style={{ borderRadius: "10px", height: "" }}
            className="p-2 bg-white"
          >
            <form onSubmit={handleSubmit} className="me-5 pe-5 w-100">
              <div class="form-group mt-2">
                <label>Service Title</label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Title"
                />
              </div>

              <div class="form-group mt-2">
                <label>Description</label>
                <textarea
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="desc"
                  placeholder="Service description"
                />
              </div>

              <div class="form-group mt-2">
                <label for="exampleInputPassword">Icon</label>
                <input
                  onChange={handleFileChange}
                  type="file"
                  class="form-control"
                  id="file"
                />
              </div>
              <button style={{width:'150px'}} type="submit" class="btn btn-success mt-5">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
