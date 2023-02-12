import react from 'react'
import './HomeMainSection.css'
import AddBuilding from '../Popup/AddBuilding/AddBuilding'

function HomeMainSection({
    click,
    blur,
    handleBlur,
}){
    return(
        <div className={click ? 'homemainsection-hide' : 'homemainsection-main'}>
            {blur && 
            <div className='overlay'>   
                <AddBuilding
                    handleBlur={handleBlur}
                />
            </div>
            }
            <div className='mainsection-content'>
                <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
                 <h1>This is Home Main Section</h1>
                <h1>This is Home Main Section content</h1>
            </div>
        </div>
    );
}

export default HomeMainSection;