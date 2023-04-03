
import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) { // Se o vídeo estiver sendo reproduzido, pause a reprodução e atualize o estado de play
      videoRef.current.pause();
      setPlay(false);
    } else { // Se o vídeo não estiver sendo reproduzido, inicie a reprodução e atualize o estado de play
      videoRef.current.play();
      setPlay(true);
    }
  }

  function handdleShare() { // Função para compartilhar o vídeo
    const text = `Confira este vídeo incrível! ${window.location.href}`;

    let ddd = "";

    // Solicita que o usuário digite o DDD do número de telefone até que seja um número de dois dígitos
    while (isNaN(ddd) || ddd.length !== 2) {
      ddd = prompt("Digite o DDD do seu número (somente números, 2 dígitos):");
    }

    const numero = prompt("Digite o número do seu telefone:");

    const numeroCompleto = `+55${ddd}${numero}`; // Cria uma string com o número completo, incluindo o código do país

    console.log(numeroCompleto); // Exibe o número completo no console

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      text
    )}&phone=${numeroCompleto}`; // Cria uma url para compartilhar o vídeo no WhatsApp

    window.open(url); // Abre uma nova janela com a url para compartilhar o vídeo no WhatsApp
  }

  return (
    // Renderiza o componente Video com os componentes VideoSidebar e VideoFooter, e o elemento de vídeo com as propriedades passadas
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
