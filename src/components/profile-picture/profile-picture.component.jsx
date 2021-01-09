//React
import React from "react";
//Styles
import "./profile-picture.styles.scss";

const ProfilePicture = ({ imgUrl, mini }) => {
  return (
    <div className={`profile-picture ${mini ? "mini" : ""}`}>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default ProfilePicture;
