import React, { useEffect, useState } from "react"; // Importa as funções useEffect e useState da biblioteca React
import "./App.css"; // Importa o estilo da aplicação
import Video from "./pages/Video"; // Importa o componente Video
import db from "./config/firebase"; // Importa a conexão com o banco de dados Firestore
import { collection, getDocs } from "firebase/firestore/lite"; // Importa funções do Firestore

function App() {
  let maxHeight; // Declara uma variável maxHeight
  if (window.innerHeight <= 800) { // Se a altura da janela for menor ou igual a 800 pixels
    maxHeight = window.innerHeight; // Define maxHeight como a altura da janela
  }

  const [video, setVideos] = useState([]); // Cria um estado para o array de vídeos

  async function getVideos() { // Define uma função assíncrona para obter os vídeos do Firestore
    const videosCollection = collection(db, "videos"); // Obtém a coleção "videos" do Firestore
    const videosSnapshot = await getDocs(videosCollection); // Obtém os documentos da coleção "videos"
    const videosList = videosSnapshot.docs.map((doc) => doc.data()); // Mapeia os documentos e retorna o array de dados dos vídeos
    setVideos(videosList); // Define o estado dos vídeos como o array de dados dos vídeos obtidos do Firestore
  }

  useEffect(() => { // Define um efeito colateral que executa a função getVideos na montagem do componente
    getVideos(); 
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}> {/* Define a classe e o estilo da aplicação */}
      <div className="app__videos"> {/* Define a classe dos vídeos */}
        {video.map((item) => { // Mapeia o array de vídeos e renderiza um componente Video para cada item
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros arquivos
