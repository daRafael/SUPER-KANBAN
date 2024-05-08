import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="link-container">
        <Link to='/'>
          Home
          <img />
        </Link>
      </div>
      <div className="link-container">
        <Link to='/about'>
          About
          <img/>
        </Link>
      </div>
    </div>
  );
}