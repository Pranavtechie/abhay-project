import React from 'react'
import './AddBuilding.css'

function AddBuilding({
    handleBlur,
}){
    return(
        <div className='popup-content'>
            <i class="fa-solid fa-xmark fa-1x" style={{padding:'5px'}} onClick={handleBlur}></i>
            <div className='addbuilding-field' style={{margin:'8px 0px 0px 5px',padding:'0px'}}>
                <h2>Name</h2>
                <input type="text" placeholder='Enter name' style={{width:'10vw', margin:'4px 0 0 6px'}}/>
            </div>
            <div className='addbuilding-field'>
                <h2 style={{margin:'-15px 5px 10px 5px',padding:'0px'}}>Basement</h2>
                <input type="checkbox" style={{margin:'-15px 5px 10px 5px',padding:'0px'}}/>
            </div>
            <div className='addbuilding-field'>
                <h2 style={{margin:'0px 5px 0px 5px',padding:'0px'}}>Floors</h2>
                <input type="number" placeholder='Enter floors' style={{width:'10vw',margin:'4px 0 0 4px'}}/>
            </div>
            <i class="fas fa-check-circle fa-2x" style={{padding:'5px'}} onClick={handleBlur}></i>
        </div>
    );
}

export default AddBuilding;