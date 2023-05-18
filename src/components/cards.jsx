import React, { useEffect, useState } from "react";
import "../CSS/cards.css";

function Card() {
  const [users, setUsers] = useState([]);

  function getevents() {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        setUsers(resp);
      });
    });
  }
  useEffect(() => {
    getevents();
  }, []);

  // to remove event
  function removeevent(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getevents();
      });
    });
    
  }

  return (
    <>

        {users.map((CurElement) => {
          return (
            <div>
              <div className="card">
                <img
                  src={CurElement.Event_img}
                  alt=""
                  style={{ width: "360px", height: "150px" }}
                />
                <div className="card-info">
                  <div className="date">
                    <h1>{CurElement.Event_date}</h1>
                    <p>25</p>
                  </div>
                  <div className="title">
                    <h1>{CurElement.Event_name}</h1>
                    <p>Online</p>
                    <div className="icon">
                      <i class="fa-solid fa-star"></i>
                      <p>+1000 people are interested!</p>
                    </div>
                    <a href={CurElement.Event_Link} target="_blank">
                      <button> Watch Now</button>
                    </a>
                    {/* <a>{CurElement.id}</a> */}
                  </div>
                  <div
                    Title="Remove"
                    className="delete_btn"
                    onClick={() => removeevent(CurElement.id)}
                  >
                    <div className="hyphen"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
     
    </>
  );
}

export default Card;
