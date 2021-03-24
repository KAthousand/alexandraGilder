import {useState} from 'react';
import "./Header.css"

function Header(props) {
  const { visibleAbout } = props
  
  let bgColor = '';

  if (visibleAbout) {
    bgColor = 'var(--rainbow-yellow)';
  } else {
    bgColor = 'transparent';
  }

  const [navOpen, setNavOpen] = useState(false);
  return ( 
    <div className="header-container">
      <div className='header-content' style={{ backgroundColor: bgColor }}>
          <a href='#services' className='nav-link'>SERVICES</a>
          <a href='#about' className='nav-link'>ABOUT</a>
      </div>
          <div className={navOpen ? 'nav-menu nav-menu-transition' : 'nav-menu'}>
        <a href='#services' className='nav-link nav-menu-link' onClick={()=>setNavOpen(!navOpen)}>SERVICES</a>
            <a href='#about' className='nav-link nav-menu-link'onClick={()=>setNavOpen(!navOpen)}>ABOUT</a>
          </div>
      <div className={navOpen? 'nav-icon2': 'nav-icon'}>
        <button onClick={() => setNavOpen(!navOpen)}></button>
      </div>
    </div>
  );
}

export default Header;