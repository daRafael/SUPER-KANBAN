import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="link-container">
        <Link to='/'>
          <img className='sidebar-icon-kanban' src="/images/kanban-icon.svg" alt="Home" />
        </Link>
      </div>
      <div className="link-container">
        <Link to='/about'>
          <img className='sidebar-icon-about' src="/images/about-icon.png" alt="About" />
        </Link>
      </div>
    </div>
  );
}