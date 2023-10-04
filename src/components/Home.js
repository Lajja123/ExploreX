import React, { useState } from "react";
import "../components/home.css";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };
  const code1 = `npm i explorex`;
  const code2 = `import logo from "./logo.svg";
  import "./App.css";
  import { Widget } from "explorex";
  
  function App() {
    return (
      <div className="App">
        <Widget address="TLp9FwsZEc3MaKQVd8Ls1r2KoVKimRH9HA" />
      </div>
    );
  }
  
  export default App;
  `;
  const code3 = `import logo from "./logo.svg";
  import "./App.css";
  import { Widget, GetHash } from "explorex";
  import Home from "./components/Home";
  
  function App() {
    const check = async () => {
      GetHash(
        "5573d02b40b7b1b693987e2694f131e3a2ae64c2809dd1f0f70033da7d9c3e4d",
        "Mainnet" 
      );
    };
  
    return (
      <div className="App">
        <Home />
        <Widget address="TLp9FwsZEc3MaKQVd8Ls1r2KoVKimRH9HA" />
        <button onClick={() => check()}>Check</button>
      </div>
    );
  }
  
  export default App;
  `;
  return (
    <div className="main-bg">
      <nav>
        <div className="nav-main">
          <img
            src="https://bafybeidewda6po5lmp2moos3vldlysavrtas6yjicav76fhkrhpxr7hk6e.ipfs.w3s.link/exploreX.png"
            style={{ width: "50%" }}
          />
        </div>
      </nav>
      <div style={{ margin: "50px 0px" }}>
        <section className="s1">
          <div className=" css-typing">
            <div className="title-heading">
              ExploreX seamlessly embeds vital explorer functions
            </div>

            <div className="title-heading ">
              directly into the user's DApp or browser
            </div>
          </div>
        </section>
        <section className="s2">
          <div style={{ width: "90%", margin: "0 auto" }}>
            <video
              autoPlay
              loop
              muted
              className="p-middle-video"
              style={{ width: "60%", borderRadius: "20px" }}
            >
              <source src="dummy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className="s3">
          <h1 style={{ padding: "20px", fontSize: "3rem" }}>
            Steps for installing the package
          </h1>
          <div>
            <h5 className="title1">Step1: Install the package</h5>
            <div style={{ width: "100%" }}>
              <div className="code1-main">
                <code>
                  <pre>{code1}</pre>
                </code>
              </div>
            </div>
          </div>
          <div>
            <h5 className="title1">Step2: Import the Widget in App.js file</h5>
            <div style={{ width: "100%" }}>
              <div className="code1-main">
                <code className="code-sub-div">
                  <pre>{code2}</pre>
                </code>
              </div>
            </div>
          </div>
          <div>
            <h5 className="title1">Step4: after every transaction receipt </h5>
            <div style={{ width: "100%" }}>
              <div className="code1-main">
                <code>
                  <pre>{code3}</pre>
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
