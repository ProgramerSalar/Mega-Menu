import React, { useRef, useState } from "react";

const App = () => {
  const audioIconRef = useRef(null);
  const connectivityIconRef = useRef(null);
  const [audioMenuVisible, setAudioMenuVisible] = useState(false);
  const [connectivityMenuVisible, setConnectivityMenuVisible] = useState(false);

  const toggleAudioMenu = () => {
    setAudioMenuVisible(!audioMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleConnectivityMenu = () => {
    setConnectivityMenuVisible(!connectivityMenuVisible);
    setAudioMenuVisible(false); // Hide the other menu
  };

  return (
    <div className="faq-container">
      <nav>
        {/* Audio parts */}
        <div className="ham-menu">
          <div className="audio" onClick={toggleAudioMenu}>
            <h3>Audio</h3>
            <a href="#">
              <i className="fa-solid fa-chevron-down" ref={audioIconRef} 
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-solid fa-chevron-up"
                style={{ display: audioMenuVisible ? "block" : "none" }}
              ></i>
            </a>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: audioMenuVisible ? "block" : "none" }}
          >
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav>
        {/* Connectivity parts */}
        <div className="ham-menu">
          <div className="audio" onClick={toggleConnectivityMenu}>
            <h3>Connectivity</h3>
            <a href="#">
              <i
                className="fa-solid fa-chevron-down"
                ref={connectivityIconRef}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-solid fa-chevron-up"
                style={{ display: connectivityMenuVisible ? "block" : "none" }}
              ></i>
            </a>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: connectivityMenuVisible ? "block" : "none" }}
          >
            <ul>
              <li>
                <a href="#">BT</a>
              </li>
              <li>
                <a href="#">Wireless Range</a>
              </li>
              <li>
                <a href="#">BT Support Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
