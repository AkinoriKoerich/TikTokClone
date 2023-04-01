import React from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

function VideoSidebar({likes, messages, shares}) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSideBar__option" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes} </p>
      </div>

      <div className="videoSideBar__option">
        <ChatIcon fontSize="large" />
        <p> { messages } </p>
      </div>

      <div className="videoSideBar__option">
        <ShareIcon fontSize="large" />
        <p> { shares }</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
