import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares, onShare }) {
  //define a função VideoSidebar que recebe 4 props: likes, messages, shares e onShare
  const [liked, setLiked] = useState(false); //define o estado "liked" como false e a função "setLiked" para alterar o valor
  const [heartAnimation, setHeartAnimation] = useState(false); //define o estado "heartAnimation" como false e a função "setHeartAnimation" para alterar o valor

  const handleLike = () => { //define a função "handleLike"
    setLiked(!liked); //inverte o valor de "liked"

    if (!liked) { //se "liked" for false
      setHeartAnimation(true); //define "heartAnimation" como true

      setTimeout(() => { //define um timer para executar a função abaixo após 1 segundo
        setHeartAnimation(false); //define "heartAnimation" como false novamente
      }, 1000);
    }
  };

  return ( //retorna o seguinte JSX
    <div className="videoSidebar" /* um container com a classe "videoSidebar" */> 
      <div className="videoSideBar__option" onClick={handleLike}> {/* um container com a classe "videoSideBar__option" e um onClick que executa a função "handleLike" */}
        {liked ? ( //se "liked" for true
          <FavoriteIcon fontSize="medium" /> //renderiza o ícone de coração preenchido
        ) : ( //se "liked" for false
          <FavoriteBorderIcon fontSize="medium" /> //renderiza o ícone de coração vazio
        )}

        <p>{liked ? likes + 1 : likes} </p> {/* renderiza o número de likes atualizados ou não, dependendo do valor de "liked" */}

        {heartAnimation && ( //renderiza o ícone de coração preenchido com a classe "heart-animation" e fonte grande
          <FavoriteIcon className="heart-animation" fontSize="large" />
        )}
      </div>

      <div className="videoSideBar__option"> {/* um container com a classe "videoSideBar__option" */}
        <ChatIcon fontSize="medium" /> {/* renderiza o ícone de chat com fonte média */}
        <p> {messages} </p> {/* renderiza o número de mensagens */}
      </div>

      <div className="videoSideBar__option" onClick={onShare}> {/* um container com a classe "videoSideBar__option" e um onClick que executa a função "onShare" */}
        <ShareIcon fontSize="medium" /> {/* renderiza o ícone de compartilhar com fonte média */}
        <p>{shares}</p> {/* renderiza o número de compartilhamentos */}
      </div>
    </div>
  );
}

export default VideoSidebar;
