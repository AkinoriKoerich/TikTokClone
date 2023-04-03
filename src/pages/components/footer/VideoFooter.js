// Importa as bibliotecas necessárias
import React from "react"; // Biblioteca React
import "./VideoFooter.css"; // Arquivo CSS
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Biblioteca de ícones

// Define o componente VideoFooter
function VideoFooter({name, description, music}) {
  return (
    // Renderiza o componente
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3> {/* Renderiza o nome do usuário */}
        <p>{description}</p> {/* Renderiza a descrição do vídeo */}
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" /> {/* Renderiza o ícone de nota musical */}
          <div className="videoFooterMusic__text">
            <p>{music}</p> {/* Renderiza o nome da música */}
          </div>
        </div>
      </div>
      <img
        className="videoFooter_record"
        alt="Imagem de um vinil girando"
        src="https://privaty.com.br/wp-content/uploads/2023/03/vinil.png"
      /> {/* Renderiza a imagem de um vinil girando */}
    </div>
  );
}

// Exporta o componente VideoFooter para ser utilizado em outros arquivos
export default VideoFooter;
