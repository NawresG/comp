import React from "react";

import photo from "../../images.jpg";
import "../style.css"
const ProfilePhoto = () => {
  return (
    <div className="profilePic">
      <img  src={photo} alt="phot" />
    </div>
  );
};

export default ProfilePhoto;