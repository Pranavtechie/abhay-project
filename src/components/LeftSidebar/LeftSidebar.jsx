import React from "react";
import './LeftSidebar.css'
import { Link } from 'react-router-dom'
import BuildingBlock from '../BuildingBlock/BuildingBlock'

function LeftSidebar({
    click,
    handleBlur,
    closeMobileMenu
}) {
    function operation(){
        closeMobileMenu();
        handleBlur();
    }
  return (
    <>
        <div className={click ? 'leftsidebar-show' : 'leftsidebar-main'}>
            <div className='leftsidebar-icon'>
                <i class="fa-solid fa-circle-plus fa-2x" onClick={operation}></i>
                <Link to='/home'>
                <i class="fa-solid fa-house fa-2x"></i>
                </Link>
            </div>
            <BuildingBlock
              name={"B1"}
              closeMobileMenu={closeMobileMenu}
            />
            <BuildingBlock
              name={"B2"}
              closeMobileMenu={closeMobileMenu}
            />
            <BuildingBlock
              name={"B3"}
              closeMobileMenu={closeMobileMenu}
            />
            <BuildingBlock
              name={"B4"}
              closeMobileMenu={closeMobileMenu}
            />
            <BuildingBlock
              name={"B5"}
              closeMobileMenu={closeMobileMenu}
            />            
        </div>
    </>
  );
}

export default LeftSidebar;