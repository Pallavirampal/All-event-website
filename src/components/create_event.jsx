import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Createevent = () => {
  const [user, setUser] = useState({
    Event_img :"",
    Event_name: "",
    Event_date: "",
    Event_place: "",
    Event_Link: "",
  });

  const {Event_img,Event_name, Event_date, Event_place,Event_Link} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/posts",user);
    alert('Data Inserted');
    console.log(user)
  };

  return (
    <div className="container bg-light">
      <div class="row">
        <div className="col-sm-13 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Create an event</h2>
          <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Event_img"
                name="Event_img"
                value={Event_img}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Event Name"
                name="Event_name"
                value={Event_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Date to be held on"
                name="Event_date"
                value={Event_date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter city/state"
                name="Event_place"
                value={Event_place}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="provide Link of your site"
                name="Event_Link"
                value={Event_Link}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-primary btn-block" ><a href="/searchbar" target = "_blank">Create Event</a></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createevent;
