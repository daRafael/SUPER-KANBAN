import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img 
          className='super-kanban-logo' 
          src="/src/assets/images/super-kanban-logo.png" 
          alt="super-kanban-logo" 
        />
      </Link>
    </div>
  );
}