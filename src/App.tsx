import "./App.css";
import "./responsive.css";
import Equilibrium from "./images/image-equilibrium.jpg";
import Avatar from "./images/image-avatar.png";
import Clock from "./images/icon-clock.svg";
import Ethereum from "./images/icon-ethereum.svg";
import View from "./images/icon-view.svg";

function App() {
  return (
    <>
      <header></header>
      <main>
        <div id="ImageContainer">
          <img id="EquilibriumImage" src={Equilibrium} alt="Equilibrium" />
          <div id="Overlay"></div>
          <img id="View" src={View} alt="View" />
        </div>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div id="CardInfo">
          <div className="IconAndText">
            <img src={Ethereum} alt="Ethereum" />
            <p id="EthereumText">0.041 ETH</p>
          </div>
          <div className="IconAndText">
            <img src={Clock} alt="Clock" />
            <p id="ClockText">3 days left</p>
          </div>
        </div>
        <div id="Author">
          <img src={Avatar} alt="Avatar" id="AvatarImage" />
          <p id="Creator">
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </main>
      <footer className="attribution">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="/">Jon Erik Ullvang</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
