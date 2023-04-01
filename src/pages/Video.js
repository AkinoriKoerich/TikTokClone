import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  function handdleShare() {
    const text = `Confira este vídeo incrível! ${window.location.href}`;

    let ddd = "";

    while (isNaN(ddd) || ddd.length !== 2) {
      ddd = prompt("Digite o DDD do seu número (somente números, 2 dígitos):");
    }

    const numero = prompt("Digite o número do seu telefone:");

    const numeroCompleto = `+55${ddd}${numero}`;

    console.log(numeroCompleto);

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      text
    )}&phone=${numeroCompleto}`;

    window.open(url);
  }
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
        onShare={handdleShare}
      />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
