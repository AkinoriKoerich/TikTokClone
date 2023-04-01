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
          description="This Is The Worst"
          music="Scary Sound Effect"
          url="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/ThisIsTheWorst.mp4?alt=media&token=4b8e6614-b454-4002-84b8-403fff8f36df"
        />
        <Video 
          likes={234}
          messages={432}
          shares={123}
          name="AkinoriKoerich"
          description="I'm Freeeeeee"
          music="a"
          url="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/i'mFree.mp4?alt=media&token=ce9161ae-2ad4-4716-9200-47f870416484"
        />
      </div>
    </div>
  );
}

export default App;
