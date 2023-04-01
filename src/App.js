import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="AkinoriKoerich"
          description="Gato sendo filho da puta"
          music="Primus - My Name Is Mud"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
        <Video 
          likes={234}
          messages={432}
          shares={123}
          name="AkinoriKoerich"
          description="Gato sendo filho da puta"
          music="Primus - My Name Is Mud"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
      </div>
    </div>
  );
}

export default App;
