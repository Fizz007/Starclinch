import React from "react";

const Eventdetail = () => {
  return (
    <div>
      <div className="heading">
        <h1>Shortlist</h1>
      </div>

      <div className="details">
        <h6>Details:</h6>
        <div className="eventdetails">
          <div className="event">
            <table>
              <tr className="head">
                <th>Event Date</th>
                <th>Location</th>
              </tr>
              <tr className="data">
                <td>2023-02-22</td>
                <td>Delhi, India</td>
              </tr>
            </table>
          </div>

          <div className="budget">
            <h2>Budget</h2>
          </div>
            <div className="btn"><button>500,000</button></div>

          <div className="singers">
            <h1>Singers</h1>
            <div className="choice">
                <p>Select an artist that matches your vibe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventdetail;
