import "./home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-contain">
        <img className="hero-img" src="/asset/notes.svg" alt="notes" />
        <div className="notes-headings">
          <div>
            <h1>
              <span className="note-heading">My</span> Notes
            </h1>
          </div>
          <div>
            <h2>Meet your Modern</h2>
            <h3 className="note-heading">Note taking app</h3>
            <div className="para">
              <p>
                Manage your daily task and workFlow in a modern way and boost
                your efficiency without any efforts
              </p>
            </div>
          </div>
          <div>
            <Link to="/notes">
              <button className="joinBtn">join now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
