import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar({
    click,
    handleClick,
    closeMobileMenu
}) {
//   const [button, setButton] = useState(true);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            RENT
            <i class='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Topbar;