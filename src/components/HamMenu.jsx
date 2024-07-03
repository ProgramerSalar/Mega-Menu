
import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const HamMenu = () => {
  const audioIconRef = useRef(null);
  const connectivityIconRef = useRef(null);
  const BatteryChargingIconRef = useRef(null);

  const [audioMenuVisible, setAudioMenuVisible] = useState(false);
  const [connectivityMenuVisible, setConnectivityMenuVisible] = useState(false);
  const [BatteryChargingVisible, setBatteryChargingVisible] = useState(false);

  const toggleAudioMenu = () => {
    setAudioMenuVisible(!audioMenuVisible);
    setConnectivityMenuVisible(false); // Hide the other menu
  };

  const toggleConnectivityMenu = () => {
    setConnectivityMenuVisible(!connectivityMenuVisible);
    setAudioMenuVisible(false); // Hide the other menu
    setBatteryChargingVisible(false);
  };

  const toggleBatteryChargingMenu = () => {
    setBatteryChargingVisible(!BatteryChargingVisible);
  };
  return (
    <div className="faq-container">
      <nav>
        {/* Audio parts */}
        <div className="ham-menu">
          <div className="audio" onClick={toggleAudioMenu}>
            <h3>Audio</h3>
            <a href="#" style={{ display: audioMenuVisible ? "none" : "flex" }}>
              {/* <i
              className="fa-solid fa-chevron-down"
              ref={audioIconRef}
              style={{
                // visibility: audioMenuVisible ? "hidden": "visible"
                display: audioMenuVisible ? "none" : "flex",
              }}
            ></i> */}
              {/* <RiArrowUpSLine /> */}
              <MdOutlineKeyboardArrowDown />
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
                style={{
                  display: connectivityMenuVisible ? "none" : "flex",
                }}
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

      <nav>
        {/* Connectivity parts */}
        <div className="ham-menu">
          <div className="audio" onClick={toggleBatteryChargingMenu}>
            <h3>Battery Charging</h3>
            <a href="#">
              <i
                className="fa-solid fa-chevron-down"
                ref={connectivityIconRef}
                style={{
                  display: BatteryChargingVisible ? "none" : "flex",
                }}
              ></i>
            </a>
            <a href="#">
              <i
                className="fa-solid fa-chevron-up"
                style={{ display: BatteryChargingVisible ? "block" : "none" }}
              ></i>
            </a>
          </div>

          <div
            className="off-screen-menu"
            style={{ display: BatteryChargingVisible ? "block" : "none" }}
          >
            <p>
              Playtime : Up to 7 hours on a single charge and an additional 70
              hours with the charging case Instacharge™ : Yes, (10-min charge =
              150-min playtime) Earbud Charging Time : Up to 45 minutes Charging
              Case Charge time : Up to 90 minutes Charging Indicator : Yes
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HamMenu;
