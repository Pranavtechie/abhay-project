import React, { useState } from "react"
import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Topbar from '../../components/Topbar/Topbar'
import HomeMainSection from '../../components/HomeMainSection/HomeMainSection'

function Home() {  
    const [click, setClick] = useState(false);
    const[blur, setBlur] = useState(false);

    const handleBlur = () => setBlur(!blur)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='home-main'>
            <div className='home-head'>
                <Topbar 
                  click={click===true}
                  handleClick={handleClick}
                  closeMobileMenu={closeMobileMenu}
                />
            </div>
            <div className='home-body'>
                <div className='home-body-sidebar'>
                    <LeftSidebar 
                    click={click===true}
                    handleClick={handleClick}
                    closeMobileMenu={closeMobileMenu}
                    />
                </div>
                <div className='home-body-main'>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                    <h2>jdjfojsodj</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;