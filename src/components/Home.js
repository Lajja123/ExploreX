import React, { useState } from "react";
import "../components/home.css";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };
  const code1 = `npm i explorex`;
  const code2 = ` import { Widget } from "explorex";
  
  function App() {
    // Your code
    return (
      <div className="App">
        <Widget address="Connected wallet address" />
      </div>
      // Your code
    );
  }
  
  export default App;
  `;
  const code3 = `import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
  import contractAbi from "./artifacts/Swap.json"; // Your contract abi
  const contractAddress = "Your contract address";
  
  function Swap() {
    const { connected, address } = useWallet();
    const { tronWeb } = window;
    const swap= async () => {
      const contract = await tronWeb.contract(contractAbi, contractAddress);
      let tx = await contract.swap().send({
        callValue: "100000",
      });
      GetHash(
          tx,
          "Enter connected chain" // Mainnet, Shasta, Nile
        );
    };
    return (
      // other code
      <div className="App">
        <button onClick={() => swap()}>Swap tokens</button>
      </div>
    );
  }
  
  export default Swap;
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
      <div style={{ marginTop: "50px" }}>
        <section className="s1">
          <div className="css-typing">
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
              style={{ width: "60%", borderRadius: "5px" }}
            >
              <source src="https://bafybeibfyyzr7lghgccdounpbqk3hgp2e776t2dima4avxtoqluo6f4yvm.ipfs.w3s.link/Untitled%20design.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className="s3">
          <h1 style={{ padding: "20px", fontSize: "2.3rem" }}>
          Steps for using the Explorex widget 
          </h1>
          <div>
            <h5 className="title1">Step1: Install the package.</h5>
            <div style={{ width: "100%" }}>
              <div className="code1-main">
                <code>
                  <pre>{code1}</pre>
                </code>
              </div>
            </div>
          </div>
          <div>
            <h5 className="title1">Step2: Import the Widget in App.js file.</h5>
            <div style={{ width: "100%" }}>
              <div className="code1-main">
                <code className="code-sub-div">
                  <pre>{code2}</pre>
                </code>
              </div>
            </div>
          </div>
          <div>
            <h5 className="title1">Step3: Call GetHash() function for every transaction you sent on the blockchain. </h5>
            <div style={{ width: "100%" }}>
              <div className="code1-main">
                <code>
                  <pre>{code3}</pre>
                </code>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{
            padding: "5px 0px",
            boxShadow:" 0 2px 20px #000000c7",
            fontSize: "15px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          Powered by{" "}
          <img
            src="https://bafybeidewda6po5lmp2moos3vldlysavrtas6yjicav76fhkrhpxr7hk6e.ipfs.w3s.link/exploreX.png"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;