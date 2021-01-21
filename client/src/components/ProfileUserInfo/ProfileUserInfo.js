import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const ProfileUserInfo = () => {
  return (
    <div
      className="row col-md-12"
      style={{ flexWrap: "nowrap", marginTop: "70px" }}
    >
      <div className="col-md-6">
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
          style={{ height: "auto", maxHeight: "250px", margin: "20px" }}
        />
      </div>

      <div className="col-md-6">
        <form style={{ height: "auto", maxHeight: "250px", margin: "20px" }}>
          <h6>Username:</h6>
          <h6>Email: </h6>
          <h6>Streak: </h6>
          <h6>Birthday: </h6>
          <h6>Joined Date: </h6>
        </form>
      </div>
    </div>
  );
};

export default ProfileUserInfo;