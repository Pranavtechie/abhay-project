import React from "react"
import { Link } from 'react-router-dom';
import './BuildingBlock.css'

function BuildingBlock({
    name,
    closeMobileMenu,
}) {
    let id = name;
    let addToInfo = '/home/'+id; 
    return(
        <Link to={addToInfo} className='buildingblock-main' onClick={closeMobileMenu}>
            <h2>{name}</h2>
        </Link>
    );
}

export default BuildingBlock;