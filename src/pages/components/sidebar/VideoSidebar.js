import React, { useState } from 'react';
import './videoSidebar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, messages, shares, onShare }) {
  const [liked, setLiked] = useState(false);
  const [heartAnimation, setHeartAnimation] = useState(false);

  const handleLike = () => {
    setLiked(!liked);

    if (!liked) {
      setHeartAnimation(true);

      setTimeout(() => {
        setHeartAnimation(false);
      }, 1000);
    }
  };

  return (
    <div className="videoSidebar">
      <div className="videoSideBar__option" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="medium" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        )}

        <p>{liked ? likes + 1 : likes} </p>

        {heartAnimation && (
          <FavoriteIcon className="heart-animation" fontSize="large" />
        )}
      </div>

      <div className="videoSideBar__option">
        <ChatIcon fontSize="medium" />
        <p> {messages} </p>
      </div>

      <div className="videoSideBar__option" onClick={onShare}>
        <ShareIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
