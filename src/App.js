
import './App.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">


      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>

        <h1 className="title red">Wassim Ben Taleb</h1>

        <br />

        <img src={imageInSrc} />

        <br />

        <img src="./imageInPublic.png" />

      </div>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/vmvOTENFH2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



    </div>
  );
}

export default App;