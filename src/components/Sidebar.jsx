import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="side-bar">
      <div className="link-container">
        <Link to='/'>
          <img className='sidebar-icon-kanban' src="src/assets/images/kanban-svgrepo-com.svg" alt="Home" />
        </Link>
      </div>
      <div className="link-container">
        <Link to='/about'>
          <img className='sidebar-icon-about' src="/src/assets/images/about-icon.png" alt="About" />
        </Link>
      </div>
    </div>
  );
}