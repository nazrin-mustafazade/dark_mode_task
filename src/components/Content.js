import React, {useContext} from 'react';
import {DarkModeContext} from './DarkModeContext';

function Content() {
    const {darkMode} = useContext(DarkModeContext);
    const contentProvider = () => {
        if (darkMode) {
            return <p>Salam. Qaranliqdi</p>
        }
        return <p>Salam. Aydinliqdi</p>
    }
    return (
        <div className={darkMode ? `Content Content-dark` : `Content`}>
           {contentProvider()}
        </div>
    )
}

export default Content